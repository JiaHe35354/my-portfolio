import LinkedinIcon from "../assets/images/icon-linkedin.svg";
import GithubIcon from "../assets/images/icon-github.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Contact() {
  const isTablet = useMediaQuery("(max-width:980px");

  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-content">
        <h2 className="heading-secondary contact-heading">Let's connect</h2>
        <p className="description-text">
          Say hello at{" "}
          <a href="mailto:jia.he5823@gmail.com">jia.he5823@gmail.com</a>
        </p>
        <p className="description-text">
          For more info, here's my <a>resume</a>
        </p>

        <div className="icon-group">
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

        {!isTablet && <p className="copyright">&copy;2026 Jia He</p>}
      </div>

      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea rows={5} id="message" name="message" />
        </div>

        <button className="btn-primary submit-btn">submit</button>
      </form>

      {isTablet && <p className="copyright-tablet">&copy;2026 Jia He</p>}
    </section>
  );
}

export default Contact;
