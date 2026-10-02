import LinkedinIcon from "../assets/images/icon-linkedin.svg";
import GithubIcon from "../assets/images/icon-github.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Contact() {
  const isTablet = useMediaQuery("(max-width:980px");

  return (
    <section className="contact-section section-container" id="contact">
      <div>
        <h2 className="heading-secondary mb-16">Let's connect</h2>
        <p>
          Get in touch at{" "}
          <a
            href="mailto:jia.he5823@gmail.com"
            className="contact-link focus-style"
          >
            jia.he5823@gmail.com
          </a>
        </p>
        <p>
          For more info, here's my{" "}
          <a href="#" className="contact-link focus-style">
            resume
          </a>
        </p>

        <div className="icon-group">
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

        <p className="copyright">&copy;2026 Jia He</p>
      </div>
    </section>
  );
}

export default Contact;
