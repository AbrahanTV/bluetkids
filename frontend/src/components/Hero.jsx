import { Link } from 'react-router'
import "./Hero.css";
import { FaPalette } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg-shapes">
        <div className="shape shape--1" />
        <div className="shape shape--2" />
        <div className="shape shape--3" />
      </div>

      <div className="hero__inner container">
        <div className="hero__text">
          <span className="section-label">¡Bienvenidos a Bluet Kids!</span>
          <h1>
            Donde los <span className="hero__blue">pequeños</span> aprenden a{" "}
            <span className="hero__orange">explorar</span> el mundo
          </h1>
          <p>
            Inglés, estimulación temprana y apoyo educativo en un ambiente
            divertido, seguro y lleno de amor. ¡Tu hijo merece lo mejor!
          </p>
          <div className="hero__actions">
            <Link to="/inscripcion" className="btn btn-primary">
              Inscribe a tu hijo
            </Link>
            <a href="#servicios" className="btn btn-secondary">
              Conoce más
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>+200</strong>
              <span>Niños felices</span>
            </div>
            <div className="hero__stat">
              <strong>5+</strong>
              <span>Años de experiencia</span>
            </div>
            <div className="hero__stat">
              <strong>100%</strong>
              <span>Ambiente seguro</span>
            </div>
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__image-placeholder">
            <span>📸</span>
            <p>Foto principal próximamente</p>
          </div>
          <div className="hero__badge hero__badge--blue">
            <span>
              <FaStar />
            </span>{" "}
            Inglés desde los 2 años
          </div>
          <div className="hero__badge hero__badge--orange">
            <span>
              <FaPalette />
            </span>{" "}
            Arte y creatividad
          </div>
        </div>
      </div>
    </section>
  );
}
