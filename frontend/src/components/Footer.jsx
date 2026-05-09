import { Link } from 'react-router'
import "./Footer.css";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img
            src="public\bluet-logo.jpg"
            alt="Bluet Kids"
            className="footer__logo"
          />
          <p>
            Para pequeños exploradores. Formando el futuro con amor, creatividad
            y aprendizaje.
          </p>
        </div>

        <div className="footer__links">
          <h4>Navegación</h4>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#precios">Precios</a>
            </li>
            <li>
              <a href="#campamento">Campamento</a>
            </li>
            <li>
              <a href="#actividades">Actividades</a>
            </li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Programas</h4>
          <ul>
            <li>
              <a href="#servicios">Inglés</a>
            </li>
            <li>
              <a href="#servicios">Estimulación Temprana</a>
            </li>
            <li>
              <a href="#servicios">Apoyo Educativo</a>
            </li>
            <li>
              <a href="#campamento">Campamento de Verano</a>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contacto</h4>
          <ul>
            <li>
              <ImLocation2 /> Plaza Ghanima, C/2 Gamundi, Módulo 101, La Vega,
              Dominican Republic 410000
            </li>
            <li>
              <FaPhoneAlt /> +1 (000) 000-0000
            </li>
            <li>
              <MdEmail /> info@bluetkids.com
            </li>
          </ul>
          <Link to="/inscripcion" className="btn btn-primary footer__cta">
            Inscríbete ahora
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Bluet Kids. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
