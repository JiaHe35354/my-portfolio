import DownloadIcon from "../assets/images/icon-download.svg";

function About() {
  return (
    <section className="about-section section-container" id="about">
      <h2 className="heading-secondary mb-16">About Me</h2>

      <div className="about-content ">
        <div className="about-description">
          <h3 className="heading-tertiary">
            I am a front-end developer based in Seville looking for exciting
            opportunities.
          </h3>
          <p className="descriptive-text">
            I am a <strong>front-end developer</strong> based in{" "}
            <strong>Seville</strong> with a passion for building websites that
            are <strong>clean, fast, and easy to use</strong>. Over the last two
            years, I have been mastering <strong>React and Next.js</strong> to
            turn complex designs into high-quality code. I care deeply about
            <strong>accessibility</strong> and making sure the web works for
            everyone. Currently, I am expanding my skills with{" "}
            <strong>Node.js</strong> and <strong>TypeScript</strong> to become a
            more well-rounded developer. I am highly motivated and looking for
            my first <strong>Junior Frontend</strong> role where I can
            contribute and keep learning
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
