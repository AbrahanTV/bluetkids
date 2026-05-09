import { Link } from "react-router";
import "./SummerCamp.css";
import { FaPalette } from "react-icons/fa6";
import { FaPersonSwimming } from "react-icons/fa6";
import { RiSpeakFill } from "react-icons/ri";
import { FaMasksTheater } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { PiBabyFill } from "react-icons/pi";

const highlights = [
  { icon: <FaPalette />, label: "Arte y manualidades" },
  { icon: <FaPersonSwimming />, label: "Actividades acuáticas" },
  { icon: <RiSpeakFill />, label: "English immersion" },
  { icon: <FaMasksTheater />, label: "Teatro y música" },
  { icon: <FaLeaf />, label: "Naturaleza y ciencia" },
  { icon: <FaTrophy />, label: "Deportes y juegos" },
];

export default function SummerCamp() {
  return (
    <section id="campamento" className="summer-camp">
      <div className="summer-camp__inner container">
        <div className="summer-camp__image">
          <div className="summer-camp__placeholder">
            <span>🏕️</span>
            <img
              src="/public/summer-camp-26.jpg"
              alt="Campamento de Verano 2026"
            />
          </div>
        </div>

        <div className="summer-camp__content">
          <span className="section-label">Campamento de Verano 2026</span>
          <h2 className="summer-camp__title">
            Un verano lleno de <span>aventuras</span> y <span>aprendizaje</span>
          </h2>
          <p className="summer-camp__desc">
            Nuestro campamento de verano es la experiencia más completa del año.
            Seis semanas de actividades, inglés, arte y amistad en un ambiente
            100% seguro y supervisado por profesionales.
          </p>

          <div className="summer-camp__highlights">
            {highlights.map((h) => (
              <div key={h.label} className="summer-camp__highlight">
                <span>{h.icon}</span>
                <p>{h.label}</p>
              </div>
            ))}
          </div>

          <div className="summer-camp__actions">
            <Link to="/inscripcion" className="btn btn-primary">
              Reservar lugar
            </Link>
            <div className="summer-camp__info">
              <span>
                <FaCalendarAlt /> 1 Julio - 31 Julio 2026
              </span>
              <span>
                <PiBabyFill /> 4 a 12 años
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
