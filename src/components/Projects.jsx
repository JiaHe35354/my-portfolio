import ProjectCard from "./ProjectCard";
import KanbanImg from "../assets/images/kanban-app.png";
import AudiophileImg from "../assets/images/audiophile.png";
import RestCountriesImg from "../assets/images/rest-countries.png";

const projects = [
  {
    img: KanbanImg,
    title: "Kanban Task Management",
    description: (
      <>
        A <strong>full-stack Kanban application</strong> built with{" "}
        <strong>Laravel, Inertia.js, React, TypeScript, and PostgreSQL</strong>.
        The application allows users to create and manage{" "}
        <strong>boards, columns, tasks, and subtasks</strong> with persistent
        backend state. It features{" "}
        <strong>drag-and-drop task management</strong>, task reordering,{" "}
        <strong>authentication and authorization</strong>, server-side
        validation, and a responsive interface with{" "}
        <strong>light and dark themes</strong>.
      </>
    ),
    tools: [
      "Laravel",
      "Inertia.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Dnd-kit",
      "Docker",
    ],
    video: "/videos/kanban-demo.mp4",
    liveLink: "https://kanban-fullstack-laravel.onrender.com/",
    github: "https://github.com/JiaHe35354/kanban-fullstack-laravel",
  },
  {
    img: AudiophileImg,
    title: "Audiophile E-commerce Website",
    description: (
      <>
        A <strong>responsive e-commerce SPA</strong> built with{" "}
        <strong>React, React Router, and Tailwind CSS</strong>. The application
        provides a complete shopping experience, including{" "}
        <strong>
          product browsing, category navigation, a shopping cart, and checkout
          form validation
        </strong>
        . The interface is designed to provide a consistent experience across{" "}
        <strong>mobile, tablet, and desktop</strong> screen sizes.
      </>
    ),
    challengeLink:
      "https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx",
    tools: ["React", "Tailwind CSS", "React Router"],
    liveLink: "https://audiophile-ecommerce-website-jiah.netlify.app/",
    github: "https://github.com/JiaHe35354/audiophile-ecommerce-website",
  },
  {
    img: RestCountriesImg,
    title: "REST Countries API",
    description: (
      <>
        An <strong>interactive country information application</strong> that
        consumes data from a REST API. Users can{" "}
        <strong>
          search for countries, filter them by region, and view detailed country
          information
        </strong>
        , including population, languages, and neighboring countries. The
        application also includes <strong>client-side routing</strong>,
        responsive layouts, and a <strong>light and dark theme</strong>.
      </>
    ),
    challengeLink:
      "https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca",
    tools: ["Nextjs", "CSS Modules", "REST API"],
    liveLink: "https://rest-countries-api-jiah.netlify.app/countries",
    github: "https://github.com/JiaHe35354/rest-countries-api",
  },
];

function Projects() {
  return (
    <section className="projects-section section-container" id="projects">
      <h2 className="heading-secondary">Featured projects</h2>
      <p className="projects-text">
        A selection of projects that demonstrate my experience building
        responsive frontend interfaces, integrating REST APIs, and developing
        full-stack web applications with backend functionality and persistent
        data.
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
