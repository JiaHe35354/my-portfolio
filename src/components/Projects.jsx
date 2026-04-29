import ProjectCard from "./ProjectCard";
import AudiophileImg from "../assets/images/screenshot-audiophile.png";
import FronendQuizImg from "../assets/images/frontend-quiz-app.png";
import AccordionImg from "../assets/images/faq-accordion-solution.png";

const projects = [
  {
    img: AudiophileImg,
    title: "Audiophile E-commerce Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam laboriosam corporis mollitia. Explicabo perspiciatis ab commodi veniam modi dolores perferendis atque vitae distinctio, labore a id repellendus similique quisquam?",
    year: 2025,
    tools: ["React", "Tailwind CSS", "React Router", "Vite"],
    liveLink: "https://audiophile-ecommerce-website-jiah.netlify.app/",
    github: "https://github.com/JiaHe35354/audiophile-ecommerce-website",
  },
  {
    img: FronendQuizImg,
    title: "Front End Quiz App",
    description: "A quiz app using Scss and vanilla JavaScript",
    year: 2025,
    tools: ["JavaScript", "Scss", "Vite"],
    liveLink: "https://frontend-quiz-app.netlify.app/",
    github: "https://github.com/JiaHe35354/frontend-quiz-app",
  },
  {
    img: AccordionImg,
    title: "FAQ Accordion Solution",
    description: "A fully accessible accordion page",
    year: 2025,
    tools: ["JavaScript"],
    liveLink: "https://faq-accordion-jiah.netlify.app/",
    github: "https://github.com/JiaHe35354/faq-accordion",
  },
];

function Projects() {
  return (
    <section className="projects-section section-container" id="projects">
      <h2 className="heading-secondary">Featured projects</h2>
      <p className="projects-text">
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>

      <ul className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
