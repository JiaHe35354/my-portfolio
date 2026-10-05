function Skills() {
  return (
    <section className="skills-section section-container" id="skills">
      <h2 className="heading-secondary mb-32">My capabilities</h2>

      <div className="skills-content">
        <p className="descriptive-text">
          A look at my <strong>technical stack</strong>. I use these tools to
          build <strong>practical, responsive web applications,</strong>{" "}
          focusing on user experience, functionality, and solving real-world
          problems.
        </p>

        <div className="skills-list">
          <div className="skill-category">
            <h3 className="skills-heading">Frontend</h3>
            <p className="skills-description">
              React, TypeScript, JavaScript, Next.js, HTML, CSS, Tailwind CSS
            </p>
          </div>
          <div className="skill-category">
            <h3 className="skills-heading">Backend</h3>
            <p className="skills-description"> PHP, Laravel, Inertia.js </p>
          </div>
          <div className="skill-category">
            <h3 className="skills-heading">Database</h3>
            <p className="skills-description">PostgreSQL, Firestore</p>
          </div>
          <div className="skill-category">
            <h3 className="skills-heading">Tools</h3>
            <p className="skills-description">
              Git, GitHub, Docker, Vite, Firebase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
