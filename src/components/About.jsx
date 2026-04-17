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
          <p className="description-text">
            I am a front-end developer based in Seville looking for exciting
            opportunities. Likes to focus on accessibility when developing.
            Passionate and curious about solving problems. Currently, I'm
            exploring Nodejs and a bit of designing. Learning more to improve
            skills.
          </p>
        </div>

        <button className="btn-primary btn-flex">
          download resume
          <div className="btn-icon-wrapper">
            <img src={DownloadIcon} alt="download icon" className="btn-icon" />
          </div>
        </button>
      </div>
    </section>
  );
}

export default About;
