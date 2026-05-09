import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import "./Navbar.css";

const links = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Precios", href: "/#precios" },
  { label: "Campamento", href: "/#campamento" },
  { label: "Actividades", href: "/#actividades" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isFormPage = pathname === "/inscripcion";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled || isFormPage ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src="/bluet-logo.jpg" alt="Bluet Kids" />
        </Link>

        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/inscripcion"
              className="btn btn-primary navbar__cta"
              onClick={() => setMenuOpen(false)}
            >
              Inscríbete
            </Link>
          </li>
        </ul>

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
