import DownloadIcon from "../assets/images/icon-download.svg";

function About() {
  return (
    <section className="about-section section-container" id="about">
      <h2 className="heading-secondary mb-32">About Me</h2>

      <div className="about-content ">
        <div className="about-description">
          <h3 className="heading-tertiary mb-12">
            I’m a frontend-focused developer with full-stack experience, based
            in Seville and looking for opportunities to build practical web
            applications.
          </h3>

          <p className="descriptive-text">
            I enjoy building websites and applications that are{" "}
            <strong>clean, responsive, and easy to use</strong>. My main
            experience is with{" "}
            <strong>React, TypeScript, and Tailwind CSS</strong>, and I have
            recently expanded into backend development with{" "}
            <strong>PHP, Laravel, Inertia.js, and PostgreSQL</strong>. Through
            my projects, I have worked with{" "}
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

        <button className="btn-primary focus-style">
          download resume
          <img src={DownloadIcon} alt="download icon" className="btn-icon" />
        </button>
      </div>
    </section>
  );
}

export default About;
