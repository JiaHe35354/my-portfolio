import HeroImage from "../assets/images/img-hero.jpg";
import LinkedinIcon from "../assets/images/icon-linkedin.svg";
import GithubIcon from "../assets/images/icon-github.svg";

import { smoothScrollTo } from "../util/smoothScrollTo";

function Hero() {
  function handleScroll() {
    smoothScrollTo("#contact");
  }

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="heading-primary">Hey, I'm Jia He</h1>
        <p className="hero-description">
          <span className="hero-occupation">Frontend Developer</span>
          <span className="block">
            A Seville based front-end developer passionate about building
            accessible and user friendly websites.
          </span>
        </p>

        <div className="btnGroup">
          <button className="btn-primary focus-style" onClick={handleScroll}>
            contact me
          </button>

          <a
            href="https://www.linkedin.com/in/jia-he-6b329197/"
            target="_blank"
            rel="noreferrer"
            className="focus-style"
          >
            <img src={LinkedinIcon} alt="linkedin" />
          </a>
          <a
            href="https://github.com/JiaHe35354"
            target="_blank"
            rel="noreferrer"
            className="focus-style"
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
