// ---------------------------------------------------------------------------
// Projects. `featured: true` sorts a project to the front and adds a badge.
//
// `slug` is the project's URL: /projects/<slug>. It must be unique, and
// changing it changes the link, so keep it stable once shared.
// `description` is the short blurb on the card. Everything below it only
// appears on the project's own page:
//
//   `output`     — the headline result, shown in a callout at the top.
//   `stages`     — the walkthrough. Each stage has a title and `parts`;
//                  each part may carry `bullets` and an `image`.
//   `takeaways`  — closing "what this demonstrates" cards.
//   `highlights` — simple bullet list, used when there are no `stages`.
//
// `links` entries are optional — omit any you don't have.
// `image` is optional: put the file in /public and use e.g. "/project.png".
// ---------------------------------------------------------------------------

export const projects = [
  {
    name: "Test Analysis Platform",
    slug: "test-analysis-platform",
    subtitle: "System Design · FastAPI · React · Hosting on Render",
    description:
      "A full-stack analytics platform for visualising and interpreting test rig data from client projects, turning an hour of manual analysis into a single click.",
    detail:
      "While working with test rig data from client projects, I needed a way to interpret my results at a larger scale, so I built the analytics system myself. That pulled me into a new domain, software engineering, where I picked up system design and hosting along the way. The result is a FastAPI backend with a React frontend, hosted on Render.",

    output:
      "A working, hosted analytics platform you can use today. What used to take me an hour of manual analysis now takes a single click.",

    stages: [
      {
        title: "A walk through the platform",
        parts: [
          {
            label: "Step 1",
            title: "Start an analysis",
            body: "Upload a CSV of prototype load-test results, or load the built-in sample data, and state the minimum load the part has to survive. The platform reads timestamped load and displacement readings for each prototype and takes it from there.",
            image: "/projects/test-analysis-platform/start-page.webp",
            alt: "The landing page: a form to upload test data or use sample data, with a field for the minimum required load set to 400 N.",
          },
          {
            label: "Step 2",
            title: "Read the results",
            body: "The analysis picks a recommended prototype and explains why. Here V2 (PA6-CF) reached 438 N against the 400 N requirement, a +38 N margin, and the only one of two prototypes to pass. A dataset summary and a comparison table lay out peak load, displacement, safety margin and pass/fail for each iteration.",
            image: "/projects/test-analysis-platform/results.webp",
            alt: "Results view: a recommended-prototype callout for V2, a dataset summary, and a prototype comparison table showing V1 failing and V2 passing.",
          },
          {
            label: "Step 3",
            title: "Compare load against displacement",
            body: "An interactive load-versus-displacement chart plots every prototype's measured curve against the requirement line, so the iterations can be compared at a glance and individual curves toggled on or off.",
            image: "/projects/test-analysis-platform/load-vs-displacement.webp",
            alt: "A load-versus-displacement line chart with curves for V1 and V2 and a dashed line marking the 400 N requirement.",
          },
        ],
      },
    ],

    takeaways: [
      {
        title: "Full-stack, self-hosted",
        body: "A FastAPI backend serving a React frontend, deployed and hosted on Render, built and run end to end rather than handed off.",
      },
      {
        title: "Self-taught system design",
        body: "Software engineering was a new domain for me; I picked up the system design and hosting needed to take this from a local prototype to a live, publicly accessible application.",
      },
      {
        title: "From an hour to a click",
        body: "The platform turns a repetitive, hour-long manual analysis into a single click, and applies a consistent pass/fail rule instead of eyeballing each result.",
      },
    ],

    tags: ["System Design", "FastAPI", "Python", "React", "Render", "Full-Stack"],
    links: {
      demo: "https://mikeysspace.github.io/Test-Analysis-Platform-/",
    },
    image: "/projects/test-analysis-platform/load-vs-displacement.webp",
    featured: true,
  },
  {
    name: "Handlebar Mount",
    slug: "handlebar-mount",
    subtitle:
      "Requirements · Reverse Engineering · CAD Modelling · FDM Prototyping · FEA + Testing",
    description:
      "A customer-led redesign of a hinged handlebar mount that dipped under load, converged over 10 iterations to a part that survives a 400 N crash case.",
    detail:
      "The customer had faced constant issues with hinged mounts dipping under load. The brief was a mount rigid enough not to dip while carrying a GoPro and Garmin computer, and strong enough to survive a worst-case crash. The whole process started from the user's problem, the expected loads and real fitment limits, rather than modelling the part in isolation.",

    output:
      "Handlebar mount redesigned to eliminate dipping under load. Design case: 0.35 kg payload (GoPro + Garmin) at 40 km/h impact → 400 N. Result: no fracture at 400 N; SF 1.14 (PA6-CF). Converged over 10 iterations.",

    stages: [
      {
        title: "Concept development and initial fitment",
        parts: [
          {
            label: "Part 1",
            title: "Establishing requirements",
            body: "The customer had faced constant issues with dipping mounts due to them being hinged. I designed a mount to sustain a maximal load of 40 kg as a worst-case crash scenario, and to be rigid enough not to dip under normal operation while carrying a GoPro and Garmin computer.",
            image: "/projects/handlebar-mount/part-1-establishing-requirements.webp",
            alt: "The original hinged mount fitted to the handlebar, showing the dipping problem.",
          },
          {
            label: "Part 2",
            title: "Designing from the existing mounting surface",
            body: "Reverse engineered the existing mounting interface using reference photos, then modelled the replacement geometry around the known mounting surface.",
            image: "/projects/handlebar-mount/part-2-existing-mounting-surface.webp",
            alt: "Reference photo of the existing mounting interface alongside the CAD model of the replacement geometry.",
          },
          {
            label: "Part 3",
            title: "FDM printing and test fitting",
            body: "FDM printed the first prototype and test fitted it on the handlebar to check clearance, alignment, interface position and basic usability.",
            image: "/projects/handlebar-mount/part-3-fdm-printing-test-fitting.webp",
            alt: "The first FDM-printed prototype held in hand, and test fitted to the handlebar.",
          },
        ],
      },
      {
        title: "Testing, reinforcement and final design",
        parts: [
          {
            label: "Part 4",
            title: "Prototype variations, load testing and FEA",
            body: "Ten designs with five iterations each. The test rig was deliberately simple: pieces were clamped to a post with a luggage scale pulling on the lip of the mount until it either broke or reached 40 kg.",
            image: "/projects/handlebar-mount/part-4-prototypes-load-testing-fea.webp",
            alt: "Printed prototype variations, the clamp-and-luggage-scale test rig, and a von-Mises FEA stress plot peaking at 92.45 MPa.",
          },
          {
            label: "Part 5",
            title: "Hybrid material reinforcement",
            body: "A reinforced mount was made using a steel washer at the failing section, but it ran into layer adhesion problems under test. Regional stiffness increased significantly, until sudden delamination.",
            image: "/projects/handlebar-mount/part-5-hybrid-material-reinforcement.webp",
            alt: "The washer-reinforced mount held in hand, showing the delaminated failure section.",
          },
          {
            label: "Part 6",
            title: "Final material selection and design",
            body: "UV-treated nylon was chosen for its mechanical properties compared to ASA, PLA and TPU:",
            bullets: [
              "Twice as stiff as PLA and ASA",
              "50% greater yield strength than PLA, and double that of ASA",
              "Double the layer strength of ASA and PLA",
              "Survived 40 kg of repeated load without breakage",
            ],
            image: "/projects/handlebar-mount/part-6-final-material-selection.webp",
            alt: "The final UV-treated nylon mount, printed and assembled with the Garmin quarter-turn interface.",
          },
        ],
      },
    ],

    takeaways: [
      {
        title: "Iteration and testing",
        body: "Focused on real-world testing rather than FEA alone: the part is non-uniform, while FEA models assume uniform material. Loads were applied perpendicular to print orientation rather than parallel, since the shear strength required in parallel is lower than perpendicular.",
      },
      {
        title: "Reinforced failure points",
        body: "The washer trial was a valuable negative result: it showed that surface preparation alone cannot overcome the adhesion mismatch between FDM material and steel.",
      },
      {
        title: "Customer-led constraints",
        body: "The design was driven by the existing mount geometry so the printed part matched the available fixing points and sat correctly on the handlebar, with FDM prototyping allowing early checks on shape, clearance and usability before committing to a final material.",
      },
    ],

    tags: [
      "Requirements",
      "Reverse Engineering",
      "CAD Modelling",
      "FDM Prototyping",
      "FEA + Testing",
    ],
    links: {},
    model: { src: "/models/handlebar-mount.stl", upAxis: "y" },
    image: "/projects/handlebar-mount/part-6-final-material-selection.webp",
    featured: true,
  },
  {
    name: "Intake Piping System",
    slug: "intake-piping-system",
    subtitle:
      "3D Scanning · Mesh Processing · CAD Modelling · FDM Printing · Fitment Validation",
    description:
      "Custom intake piping reverse-engineered from a 3D scan of the engine bay, fitted first time with a verified 15 mm minimum clearance and no interference.",
    detail:
      "The factory intake was incompatible with generic cone filters, and replacements were back-ordered from Europe. Rather than working from assumed measurements, the design started by capturing the engine bay as 3D scan data, so real packaging constraints were embedded in the model from the first sketch, and clearances were designed in rather than hoped for.",

    output:
      "Custom piping accepting a 76 mm cone filter, the largest filter OD that clears the bonnet and factory airbox while retaining factory air routing within the scanned envelope. Mates to the factory oval outlet (105 × 63 mm OD) with a minimum 15 mm clearance to the engine cover. FDM sections are acetone solvent-welded and RTV-sealed at the joints. Final part in ABS for underbonnet heat and chemical resistance.",

    stages: [
      {
        title: "Scanning, mesh processing and CAD design",
        parts: [
          {
            label: "Part 1",
            title: "Scanning the area",
            body: "Scanned the engine bay to capture packaging space, clearances and surrounding components. Physical measurements were taken alongside the scan to verify geometrical accuracy and ensure the captured data reflected real dimensions before progressing to mesh processing.",
            image: "/projects/intake-piping-system/part-1-scanning-the-area.webp",
            alt: "3D scanning the engine bay, with the capture software running on a laptop over the open bonnet.",
          },
          {
            label: "Part 2",
            title: "Processing the mesh",
            body: "Multiple scans were completed and the cleanest result, free of artefacts, with clear geometry and undisrupted surfaces, was selected. The mesh was then processed by progressively removing areas irrelevant to the required geometry until only the needed sections remained. Resolution was refined to a workable file size before being imported into SolidWorks as the design reference.",
            image: "/projects/intake-piping-system/part-2-processing-the-mesh.webp",
            alt: "The raw engine-bay scan mesh, before irrelevant geometry was trimmed away.",
          },
          {
            label: "Part 3",
            title: "Designing the inlet pipe",
            body: "Modelled the inlet pipe directly around the 3D scan geometry to ensure clear routing without potential interference with surrounding components. Clearances were built in from the start rather than assumed, which was confirmed during later test fitting.",
            image:
              "/projects/intake-piping-system/part-3-designing-the-inlet-pipe.webp",
            alt: "The CAD inlet pipe modelled directly against the trimmed engine-bay scan mesh.",
          },
        ],
      },
      {
        title: "Prototyping, fitment and outcome",
        parts: [
          {
            label: "Part 4",
            title: "Printing the connector and test fitting",
            body: "Critical interface printed and fit-checked first: the connector receives the factory male outlet, an oval section, 105 × 63 mm OD, reverse-engineered from the scan with a slip-fit allowance for acetone bonding. Resolving the most constrained geometry early de-risked the remaining sections.",
            image:
              "/projects/intake-piping-system/part-4-connector-test-fitting.webp",
            alt: "The printed connector held against the factory oval outlet to check the slip fit.",
          },
          {
            label: "Part 5",
            title: "Printing the remaining piping",
            body: "With the interface confirmed, the remaining sections were printed, dry-assembled, then joined by acetone solvent-welding into a single body, with the slip joints sealed using RTV silicone. Staged printing kept each section manageable and editable without reprinting the full assembly.",
            image:
              "/projects/intake-piping-system/part-5-printing-remaining-piping.webp",
            alt: "The dry-assembled pipe sections held together before solvent welding.",
          },
          {
            label: "Part 6",
            title: "Test fitting on the vehicle",
            body: "Installed on the vehicle with a minimum 15 mm clearance to the engine cover, verified with a 15 mm flexible shaft at the tightest point, and no interference, validating the scan-referenced design. The packaging-driven 10% convergence uses a smooth transition to limit pressure loss; a back-to-back pressure test against the OEM pipe is the next step.",
            image:
              "/projects/intake-piping-system/part-6-test-fitting-on-vehicle.webp",
            alt: "The finished intake pipe installed in the engine bay, clearing the engine cover.",
          },
        ],
      },
    ],

    takeaways: [
      {
        title: "Scan quality selection",
        body: "Multiple captures were taken and the cleanest scan chosen to ensure the downstream mesh and CAD work was based on accurate, reliable geometry from the start.",
      },
      {
        title: "Scan-referenced geometry",
        body: "Modelling directly around the scan embedded real packaging constraints into the design, eliminating assumptions about clearances and reducing the risk of interference during fitment.",
      },
      {
        title: "Connector-first workflow",
        body: "Printing and validating the most constrained interface first reduced rework risk and created a manageable, staged workflow for the remaining pipe sections.",
      },
      {
        title: "Fitment validated by scan",
        body: "A minimum 15 mm clearance to the engine cover and no interference at first fit: designing directly around the scan produced an installation-ready part without iteration.",
      },
      {
        title: "Airflow: loss control",
        body: "The 10% area convergence is a packaging constraint, not a performance feature; a smooth converging transition limits the resulting loss. Its effect against the OEM pipe will be quantified by a back-to-back turbo-inlet pressure test (pending).",
      },
      {
        title: "Next steps and material selection",
        body: "Final part in ABS: a glass-transition temperature near 100 °C suits the underbonnet environment (versus nylon's ~70 °C), and acetone solvent-welding gives strong, sealed joints between the FDM sections. ASA offers better UV and heat-soak resistance but bonds less readily with acetone. If chosen, joint strength must be re-validated.",
      },
    ],

    tags: [
      "3D Scanning",
      "Mesh Processing",
      "CAD Modelling",
      "FDM Printing",
      "Fitment Validation",
    ],
    links: {},
    model: { src: "/models/intake-piping.stl", upAxis: "y" },
    image: "/projects/intake-piping-system/part-6-test-fitting-on-vehicle.webp",
    featured: true,
  },
  {
    name: "Dolphin Torch Reverse Engineering",
    slug: "dolphin-torch-housing-redesign",
    subtitle:
      "Reverse Engineering · SolidWorks · Technical Drawing · Design for Manufacture",
    description:
      "A complete teardown and redraw of an Eveready Dolphin torch, 16 parts across three sub-assemblies, modelled in SolidWorks and documented to manufacturing standard.",
    detail:
      "I stripped an Eveready Dolphin torch down to its individual components and rebuilt it in SolidWorks as a full, manufacturable drawing set. Every part was measured, modelled and documented, from the ABS main casing and silicone seals to the sheet-metal battery contacts and the LED optic, with materials, masses, tolerances and section views defined so the whole product could be reproduced from the drawings alone.",

    output:
      "A complete A3 drawing package: a top-level assembly with an exploded bill of materials, three sub-assemblies (main body, battery holder & contacts, and lid), and fully dimensioned detail drawings for all 16 parts, each with its material, mass and tolerances specified, in third-angle projection.",

    highlights: [
      "Reverse engineered a complete Eveready Dolphin torch into 16 parts across three sub-assemblies: main body (DT_1), battery holder and contacts (DT_2), and lid (DT_3).",
      "Produced a structured bill of materials with part numbers and an exploded assembly view showing how every component fits together.",
      "Assigned real materials and reported per-part mass: an 87 g ABS main casing, silicone-rubber seal and button, a PA6 button stem, alloy-steel and copper battery contacts, and a medium-impact acrylic lens.",
      "Documented each part to manufacturing standard: dimensioned views, section and detail callouts, third-angle projection and tolerance blocks.",
    ],

    takeaways: [
      {
        title: "Reverse engineering",
        body: "Recovered the geometry, fits and interfaces of a real, mass-produced product by measurement, then rebuilt it part by part so the model matched how the torch actually goes together.",
      },
      {
        title: "Design for manufacture",
        body: "Documented to a standard someone else could build from: materials, masses and tolerances defined per part, not just a 3D model that looks right on screen.",
      },
      {
        title: "Technical drawing",
        body: "A full drawing package in third-angle projection with section and detail views and a structured, numbered bill of materials tying every part back to its assembly.",
      },
    ],

    tags: [
      "Reverse Engineering",
      "SolidWorks",
      "Technical Drawing",
      "GD&T",
      "Design for Manufacture",
      "BOM",
    ],
    links: {},
    model: { src: "/models/dolphin-torch.stl", upAxis: "z", rock: 25 },
    figure: {
      src: "/projects/dolphin-torch/exploded-assembly-drawing.webp",
      caption:
        "Top-level exploded assembly drawing (A3, third-angle projection) with the bill of materials: DT_1 main body sub-assembly, DT_2 bulb holder and contacts, DT_3 lid, and the 6 V lantern battery.",
      alt: "Rendered exploded assembly drawing of the Dolphin torch with a titled bill of materials listing DT_1 main body, DT_2, DT_3 lid and a 6 V torch battery, in third-angle projection.",
    },
    attachments: [
      {
        label: "Full drawing package",
        file: "/projects/dolphin-torch/dolphin-torch-drawings.pdf",
        note: "23 A3 sheets · PDF · 4.2 MB",
      },
    ],
    image: "/projects/dolphin-torch/exploded-view.webp",
    featured: false,
  },
];
