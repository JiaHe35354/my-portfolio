import htmlIcon from "../assets/images/html-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";
import jsIcon from "../assets/images/javascript-icon.svg";
import reactIcon from "../assets/images/react-js-icon.svg";
import nextIcon from "../assets/images/nextjs-icon.svg";
import reduxIcon from "../assets/images/redux-icon.svg";
import tailwindIcon from "../assets/images/tailwind-css-icon.svg";
import bootstrapIcon from "../assets/images/bootstrap-5-logo-icon.svg";
import sassIcon from "../assets/images/sass-icon.svg";
import gitIcon from "../assets/images/git-icon.svg";
import githubIcon from "../assets/images/github-icon-black.svg";

const skillsIcons = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React.js", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Redux.js", icon: reduxIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "SASS", icon: sassIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
];

function Skills() {
  return (
    <section className="skills-section section-container" id="skills">
      <h2 className="heading-secondary mb-12">My capabilities</h2>

      <div className="skills-content">
        <p>I am always looking to add more skills.</p>

        <ul className="skills-list">
          {skillsIcons.map((skill) => (
            <li key={skill.name} className="skill-item">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
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
