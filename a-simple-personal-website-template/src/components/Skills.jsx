import { skills } from "../content";
import Section from "./Section.jsx";

export default function Skills({ id, title }) {
  if (!skills.length) return null;
  return (
    <Section id={id} title={title}>
      <div className="skill-groups">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
