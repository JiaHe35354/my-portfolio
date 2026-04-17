import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5, color: "#E34F26" },
  { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "React.js", icon: faReact, color: "#61DAFB" },
  { name: "Next.js", icon: faReact, color: "#61DAFB" },
  { name: "Redux.js", icon: faReact, color: "#764ABC" },
  { name: "Tailwind CSS", icon: faWind, color: "#38B2AC" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
  { name: "SASS", icon: faSass, color: "#CC6699" },
  { name: "Git", icon: faGitAlt, color: "#F05032" },
  { name: "GitHub", icon: faGithub, color: "#181717" },
];

function Skills() {
  return (
    <section className="skills-section section-container" id="skills">
      <h2 className="heading-secondary mb-12">My capabilities</h2>

      <div className="skills-content">
        <p className="description-text">
          I am always looking to add more skills.
        </p>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-item">
              <FontAwesomeIcon
                icon={skill.icon}
                size="1x"
                style={{ color: skill.color }}
                className="skill-icon"
              />
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
