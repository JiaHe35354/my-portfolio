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
import { faWind, faCircleNodes } from "@fortawesome/free-solid-svg-icons";

const siNextjs = {
  prefix: "fac",
  iconName: "nextjs",
  icon: [
    512,
    512,
    [],
    "f368",
    "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192zm-144 80l-76.8-102.4V336H200V176h27.2l83.2 110.4V176h27.2v160h-33.6z",
  ],
};

const siRedux = {
  prefix: "fac",
  iconName: "redux",
  icon: [
    500,
    500,
    [],
    "f745",
    "M356.3 389.2c-12.8 0-25-4.4-34.9-12.2l-37.1-29.2c-17.5-13.8-42.9-13.8-60.4 0l-37.1 29.2c-9.9 7.8-22.1 12.2-34.9 12.2-31.5 0-57.1-25.6-57.1-57.1 0-14.8 5.7-28.7 16.1-39.2l24.4-24.4c16.3-16.3 16.3-42.7 0-59L112 185.1c-10.4-10.5-16.1-24.4-16.1-39.2 0-31.5 25.6-57.1 57.1-57.1 12.8 0 25 4.4 34.9 12.2l37.1 29.2c17.5 13.8 42.9 13.8 60.4 0l37.1-29.2c9.9-7.8 22.1-12.2 34.9-12.2 31.5 0 57.1 25.6 57.1 57.1 0 14.8-5.7 28.7-16.1 39.2l-24.4 24.4c-16.3 16.3-16.3 42.7 0 59l24.4 24.4c10.4 10.5 16.1 24.4 16.1 39.2.1 31.5-25.5 57.1-57.1 57.1z",
  ],
};

const skills = [
  { name: "HTML", icon: faHtml5, color: "#E34F26" },
  { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "React.js", icon: faReact, color: "#61DAFB" },
  { name: "Next.js", icon: siNextjs, color: "#FFFFFF" },
  { name: "Redux.js", icon: siRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: faWind, color: "#38B2AC" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
  { name: "SASS", icon: faSass, color: "#CC6699" },
  { name: "Git", icon: faGitAlt, color: "#F05032" },
  { name: "GitHub", icon: faGithub, color: "#FFFFFF" },
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
