import { useState } from "react";

function Navbar() {
  const links = ["About", "Skills", "Projects", "Contact"];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="navbar">
      <button className="main-logo">Jia He</button>
      <ul>
        {links.map((link, index) => (
          <li key={link}>
            <a
              href={`#${link.toLocaleLowerCase()}`}
              className={`nav-link ${hoveredIndex === index ? "active" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {link}
              <span className="underline"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
