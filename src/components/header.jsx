import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-logo">NVRMND</div>

        <div className="header-center">
          CREATIVE DIGITAL STUDIO
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      <nav className={`mobile-menu ${menuOpen ? "menu-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          HOME
        </a>

        <a href="#process" onClick={closeMenu}>
          PROCESS
        </a>

        <a href="#services" onClick={closeMenu}>
          SERVICES
        </a>

        <a href="#work" onClick={closeMenu}>
          WORK
        </a>

        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>
      </nav>
    </>
  );
}

export default Header;