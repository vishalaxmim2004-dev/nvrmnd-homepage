import React from "react";
import "./Work.css";

function Work() {
  const projects = [
    {
      number: "01",
      title: "DIGITAL BRAND",
      category: "Brand Experience",
      description:
        "Creating digital experiences that help brands connect, grow and make an impact.",
    },
    {
      number: "02",
      title: "FUTURE SPACE",
      category: "Web Design",
      description:
        "Designing immersive digital spaces for a more connected tomorrow.",
    },
    {
      number: "03",
      title: "CREATIVE WORLD",
      category: "Digital Experience",
      description:
        "Exploring new possibilities through creative technology and design.",
    },
  ];

  return (
    <section className="work" id="work">

      {/* TOP HEADER */}
      <div className="work-top">
        <span>SELECTED WORK</span>
        <span>2026</span>
      </div>


      {/* MAIN HEADING */}
      <h2 className="work-main-title">
        WORK
        <br />
        THAT
        <br />
        MATTERS.
      </h2>


      {/* PROJECTS */}
      <div className="work-grid">

        {projects.map((project, index) => (
          <div className="work-card" key={project.number}>

            {/* NUMBER */}
            <span className="work-number">
              {project.number}
            </span>


            {/* ANIMATION / IMAGE AREA */}
            <div className={`project-placeholder project-${index + 1}`}>

              <div className="project-visual">

                {/* Digital Brand visual */}
                {index === 0 && (
                  <div className="visual-brand">
                    <div className="brand-shape"></div>
                  </div>
                )}


                {/* Future Space visual */}
                {index === 1 && (
                  <div className="visual-space">
                    <div className="space-circle"></div>
                    <div className="space-person"></div>
                  </div>
                )}


                {/* Creative World visual */}
                {index === 2 && (
                  <div className="visual-world">
                    <div className="world-box"></div>
                  </div>
                )}

              </div>

            </div>


            {/* RIGHT SIDE CONTENT */}
            <div className="work-content">

              <h3>{project.title}</h3>

              <p className="work-category">
                {project.category}
              </p>

              <p className="work-description">
                {project.description}
              </p>

              <a href="#contact" className="work-link">
                VIEW PROJECT
                <span></span>
              </a>

            </div>


            {/* ARROW */}
            <span className="work-arrow">
              ↗
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Work;