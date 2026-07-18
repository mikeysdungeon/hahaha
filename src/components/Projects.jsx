import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../content";
import Icon from "./Icon.jsx";
import ProjectCard from "./ProjectCard.jsx";
import Section from "./Section.jsx";

// --- Looping carousel -------------------------------------------------------
// How many cards are visible at once is set in CSS (--visible: 3 / 2 / 1 by
// breakpoint), so JS never needs to know it. The track always renders a fixed
// window of RENDERED slots — one parked off the left edge, up to three visible,
// and a buffer on the right — and slides exactly one slot per press.
//
// Looping is seamless: a press animates the track by one slot; when that
// finishes we advance the logical index and return the track to its resting
// offset. Because the resting slot then holds the next project, the reset is
// invisible. The reset is spread across animation frames (disable the
// transition, then on a later frame move the track, then re-enable it) so the
// browser can never animate the reset itself — doing all three in one commit
// lets it play the jump-back as a ~half-second reverse slide, which is the
// "snap" this avoids.
const RENDERED = 5; // 1 left buffer + up to 3 visible + 1 right buffer
const STEP = 100 / RENDERED; // one slot as a % of the track's own width (20%)
const REST = -1; // resting offset, in slots (one card parked off the left)
const SLOTS = [-1, 0, 1, 2, 3]; // slot positions relative to the logical index
const DURATION = 500;
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)"; // easeInOutCubic — smooth both ends

const mod = (x, n) => ((x % n) + n) % n;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function Projects({ id, title }) {
  const sorted = useMemo(
    () =>
      [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)),
    []
  );
  const n = sorted.length;

  const [index, setIndex] = useState(0);
  const [frame, setFrame] = useState(REST); // -1 rest, -2 next target, 0 prev target
  const [animated, setAnimated] = useState(true); // whether transform transitions
  const lock = useRef(false); // ignore presses mid-slide
  const dir = useRef(0); // direction of the slide in progress
  const timer = useRef(null); // fallback if transitionend never fires
  const raf1 = useRef(0);
  const raf2 = useRef(0);

  // Cancel any pending frames/timeout if the section unmounts mid-slide.
  useEffect(
    () => () => {
      clearTimeout(timer.current);
      cancelAnimationFrame(raf1.current);
      cancelAnimationFrame(raf2.current);
    },
    []
  );

  if (n === 0) return null;

  // Called once the slide finishes: fold the one-slot move into the logical
  // index and return the track to rest, guaranteeing the reset is not animated.
  function settle() {
    if (!lock.current) return;
    lock.current = false;
    clearTimeout(timer.current);

    setAnimated(false); // frame 1: transition off (track still at the slid position)
    raf1.current = requestAnimationFrame(() => {
      setIndex((i) => mod(i + dir.current, n)); // frame 2: shift content...
      setFrame(REST); // ...and move back to rest — instant, so seamless
      raf2.current = requestAnimationFrame(() => setAnimated(true)); // frame 3: re-arm
    });
  }

  function go(step) {
    if (lock.current || n <= 1) return;
    if (prefersReducedMotion()) {
      setIndex((i) => mod(i + step, n));
      return;
    }
    lock.current = true;
    dir.current = step;
    setAnimated(true);
    setFrame(REST - step); // +1 -> -2 (slide left), -1 -> 0 (slide right)
    // transitionend is the primary trigger; this only fires if it doesn't.
    timer.current = setTimeout(settle, DURATION + 120);
  }

  const carousel = n > 1;
  const trackStyle = {
    transform: `translateX(${frame * STEP}%)`,
    transition: animated ? `transform ${DURATION}ms ${EASE}` : "none",
  };

  return (
    <Section id={id} title={title}>
      <div className={`projects-carousel${carousel ? "" : " is-static"}`}>
        {carousel && (
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => go(-1)}
            aria-label="Previous projects"
          >
            <Icon name="arrow-left" size={20} />
          </button>
        )}

        <div
          className="carousel-viewport"
          role="group"
          aria-roledescription="carousel"
          aria-label="Projects"
        >
          <ul
            className="carousel-track"
            style={trackStyle}
            onTransitionEnd={(e) => {
              if (e.propertyName === "transform") settle();
            }}
          >
            {carousel
              ? SLOTS.map((p) => {
                  const project = sorted[mod(index + p, n)];
                  return (
                    // Keyed by slot position, not project, so the DOM nodes
                    // persist across the reset and only their contents swap.
                    <li className="carousel-slot" key={p}>
                      <ProjectCard project={project} />
                    </li>
                  );
                })
              : sorted.map((project) => (
                  <li className="carousel-slot" key={project.slug}>
                    <ProjectCard project={project} />
                  </li>
                ))}
          </ul>
        </div>

        {carousel && (
          <button
            type="button"
            className="carousel-arrow"
            onClick={() => go(1)}
            aria-label="Next projects"
          >
            <Icon name="arrow-right" size={20} />
          </button>
        )}
      </div>
    </Section>
  );
}
