function About() {
  return (
    <section className="about-section section-container" id="about">
      <h2 className="heading-secondary mb-32">About Me</h2>

      <div className="about-content ">
        <div className="about-description">
          <h3 className="heading-tertiary mb-12">
            I’m a full-stack developer based in Seville, focused on building
            practical web applications and looking for opportunities to solve
            real-world problems.
          </h3>

          <p className="descriptive-text">
            I enjoy building websites and applications that are{" "}
            <strong>clean, responsive, and easy to use</strong>. I work across
            the frontend and backend using{" "}
            <strong>React, TypeScript, Laravel, PHP, and PostgreSQL</strong>.
            Through my projects, I have worked with{" "}
            <strong>
              authentication, authorization, server-side validation, relational
              data, and complex drag-and-drop interactions
            </strong>
            . I enjoy solving practical problems and turning ideas into
            reliable, working products. I am currently looking for my first{" "}
            <strong>professional software development role</strong> where I can
            contribute to real-world projects and continue growing as a
            developer.
          </p>
        </div>

        <a href="/resume.pdf" download className="resume-btn focus-style">
          download resume
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 13.3333L13.3334 9.16658H10.8334V3.33325H9.16675V9.16658H6.66675L10.0001 13.3333Z"
              fill="currentColor"
            />
            <path
              d="M16.6667 15.0001H3.33341V9.16675H1.66675V15.0001C1.66675 15.9192 2.41425 16.6667 3.33341 16.6667H16.6667C17.5859 16.6667 18.3334 15.9192 18.3334 15.0001V9.16675H16.6667V15.0001Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default About;
