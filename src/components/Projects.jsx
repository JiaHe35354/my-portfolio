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
        A <strong>fully functional, responsive</strong> task management app that
        helps you <strong>organize project work</strong>. Built to be{" "}
        <strong>easy to use</strong> and <strong>clean</strong>, the app helps
        users manage large projects by putting tasks into{" "}
        <strong>boards and columns you can change</strong>. It features{" "}
        <strong>full CRUD actions</strong> (create, read, update, delete),
        <strong>detailed task lists</strong>, and a{" "}
        <strong>smooth theme-switcher</strong>
        (Light/Dark mode) carefully designed to look great in any workspace.
      </>
    ),
    year: 2026,
    tools: [
      "Nextjs",
      "Firestore",
      "Firebase Auth",
      "CSS Modules",
      "Dnd-kit",
      "Vite",
    ],
    liveLink: "https://kanban-taskmanagement-jia.netlify.app/",
    github: "https://github.com/JiaHe35354/kanban-task-management",
  },
  {
    img: AudiophileImg,
    title: "Audiophile E-commerce Website",
    description: (
      <>
        A <strong>modern e-commerce website</strong> for high-end audio gear.
        The app features a<strong>smooth shopping flow</strong>, from browsing
        product categories to adding items to a{" "}
        <strong>functional shopping cart</strong>. It includes a{" "}
        <strong>detailed checkout page</strong> with form validation to ensure
        all user details are correct. The design is{" "}
        <strong>fully responsive</strong>, making sure the store looks great and
        is easy to navigate on <strong>phones, tablets, and desktops</strong>.
      </>
    ),
    year: 2025,
    tools: ["React", "Tailwind CSS", "React Router"],
    liveLink: "https://audiophile-ecommerce-website-jiah.netlify.app/",
    github: "https://github.com/JiaHe35354/audiophile-ecommerce-website",
  },
  {
    img: RestCountriesImg,
    title: "REST Countries API",
    description: (
      <>
        An <strong>interactive world map app</strong> that pulls real-time data
        from a global API. Users can{" "}
        <strong>search for specific countries</strong> or{" "}
        <strong>filter them by region</strong> to find information quickly. The
        app features a <strong>detailed info page</strong> for every country,
        showing facts like population, native name, and borders. I also built a
        <strong>custom color theme toggle</strong> so users can easily switch
        between a light and dark look.
      </>
    ),
    year: 2025,
    tools: ["Nextjs", "CSS Modules", "REST API"],
    liveLink: "https://rest-countries-api-jiah.netlify.app/countries",
    github: "https://github.com/JiaHe35354/rest-countries-api",
  },
  // {
  //   img: x,
  //   title: "Mood Tracking App",
  //   description: "A quiz app using Scss and vanilla JavaScript",
  //   year: 2026,
  //   tools: ["React"],
  //   liveLink: "",
  //   github: "https://github.com/xaviguasch/mood-tracking-app-fm-xavi-jia",
  // },
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
