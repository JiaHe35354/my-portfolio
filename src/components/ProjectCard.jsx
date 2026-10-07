import CtaIcon from "../assets/images/icon-cta.svg";
import GithubIcon from "../assets/images/icon-github.svg";
import VideoDialog from "./VideoDialog";

function ProjectCard({
  img,
  title,
  description,
  challengeLink,
  tools,
  video,
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

        <p className="mb-32 descriptive-text">{description}</p>

        <p className="project-info">Project info</p>

        {challengeLink && (
          <p className="project-challenge">
            <span>Challenge:</span>
            <span>
              <a
                href={challengeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-challenge-link focus-style"
              >
                Frontend Mentor
              </a>
            </span>
          </p>
        )}

        <div className="project-tools">
          <span className="tools-title">Tools:</span>

          <ul>
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>

        {video && (
          <p className="project-demo-notice">
            The live demo may take a few seconds to load. You can watch the demo
            video while you wait.
          </p>
        )}

        <div className="project-links">
          {video && <VideoDialog videoSrc={video} />}

          <a
            className="project-link focus-style"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <div className="link-wrapper">
              Live demo{" "}
              <img
                src={CtaIcon}
                alt="call to action icon"
                className="project-cta-icon"
              />
            </div>
          </a>
          <a
            className="project-link focus-style"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-wrapper">
              See on GitHub{" "}
              <img
                src={GithubIcon}
                alt="github icon"
                className="project-gh-icon"
              />
            </div>
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
