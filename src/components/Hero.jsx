import HeroImage from "../assets/images/img-hero.jpg";

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
          <span className="hero-occupation">
            Full-Stack Developer | Laravel, React & TypeScript
          </span>
          <span className="hero-text descriptive-text mb-12">
            A Seville-based developer focused on building practical,
            user-friendly web applications across the frontend and backend with
            Laravel, React, and TypeScript. Currently seeking my first
            professional software development role.
          </span>
        </p>

        <div>
          <button className="btn-primary focus-style" onClick={handleScroll}>
            contact me
          </button>
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
