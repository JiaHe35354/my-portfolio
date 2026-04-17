import CtaIcon from "../assets/images/icon-cta.svg";
import GithubIcon from "../assets/images/icon-github.svg";

function ProjectCard({
  img,
  title,
  description,
  year,
  tools,
  liveLink,
  github,
}) {
  return (
    <li className="project-card">
      <div className="project-image-box">
        <img src={img} alt={title} />
      </div>

      <div className="project-info-box">
        <h3 className="heading-tertiary mb-16">{title}</h3>
        <p className="description-text mb-32">{description}</p>
        <p className="project-info">Project info</p>
        <p className="project-year">
          <span>Year</span>
          <span className="project-year-value">{year}</span>
        </p>
        <div className="project-tools">
          <span className="tools-title">Tools:</span>

          <ul>
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="project-links">
          <a
            className="project-link"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo{" "}
            <img
              src={CtaIcon}
              alt="call to action icon"
              className="project-cta-icon"
            />
          </a>
          <a
            className="project-link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            See on GitHub{" "}
            <img
              src={GithubIcon}
              alt="github icon"
              className="project-gh-icon"
            />
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
