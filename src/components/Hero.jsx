import HeroImage from "../assets/images/demo-profile.png";
import LinkedinIcon from "../assets/images/icon-linkedin.svg";
import GithubIcon from "../assets/images/icon-github.svg";
import CtaICon from "../assets/images/icon-cta.svg";

import { smoothScrollTo } from "../util/smoothScrollTo";

function Hero() {
  function handleScroll() {
    smoothScrollTo("#contact");
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="heading-primary">Hey, I'm Jia He</h1>
        <p className="hero-description">
          <span className="hero-occupation">Frontend Developer</span>
          <span className="description-text block">
            A Seville based front-end developer passionate about building
            accessible and user friendly websites.
          </span>
        </p>

        <div className="btnGroup">
          <button className="btn-primary btn-flex" onClick={handleScroll}>
            contact me
            <div className="btn-icon-wrapper">
              <img src={CtaICon} alt="download icon" className="btn-icon" />
            </div>
          </button>
          <a
            href="https://www.linkedin.com/in/jia-he-6b329197/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="linkedin" />
          </a>
          <a
            href="https://github.com/JiaHe35354"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="github" />
          </a>
        </div>
      </div>

      <div className="hero-img-box">
        <img
          src={HeroImage}
          alt="A person working remotely"
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default Hero;
