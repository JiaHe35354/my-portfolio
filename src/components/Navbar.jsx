import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

import { smoothScrollTo } from "../util/smoothScrollTo";

const navLinks = ["About", "Skills", "Projects", "Contact"];

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:640px");

  const headerRef = useRef();
  const navRef = useRef();

  useEffect(() => {
    const navHeight = navRef.current?.offsetHeight || 0;

    const stickyNav = ([entry]) => {
      setIsSticky(!entry.isIntersecting);
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    if (headerRef.current) headerObserver.observe(headerRef.current);

    return () => headerObserver.disconnect();
  }, []);

  function handleClickLink(e) {
    e.preventDefault();

    const link = e.target.closest(".nav-link, .nav-link-mobile, .main-logo");
    if (!link) return;

    setIsMenuOpen(false);

    const id = link.getAttribute("href");
    smoothScrollTo(id);
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header ref={headerRef} className={isSticky ? "header-sticky-wrapper" : ""}>
      <nav ref={navRef} className={`navbar ${isSticky ? "sticky" : ""}`}>
        <a className="main-logo" href="#hero" onClick={handleClickLink}>
          Jiahe
        </a>

        {isMobile && (
          <div className="mobile-nav-wrapper">
            <button
              className={`nav-button ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span className="nav-icon">&nbsp;</span>
            </button>

            <div className={`nav-background ${isMenuOpen ? "expanded" : ""}`}>
              &nbsp;
            </div>

            <div className={`nav-fullscreen ${isMenuOpen ? "visible" : ""}`}>
              <ul className="mobile-nav-list" onClick={handleClickLink}>
                {navLinks.map((link) => (
                  <li key={link} className="nav-item">
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="nav-link-mobile"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {!isMobile && (
          <ul className="nav-links" onClick={handleClickLink}>
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
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
        )}
      </nav>
    </header>
  );
}

export default Navbar;
