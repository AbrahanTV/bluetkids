import "./Activities.css";
import { FaMusic } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { TbGymnastics } from "react-icons/tb";
import { FaMicroscope } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";

const activities = [
  {
    icon: <FaMusic />,
    title: "Música y Ritmo",
    day: "Lunes",
    age: "2-5 años",
    color: "blue",
    desc: "Canciones, instrumentos y movimiento para desarrollar el oído musical.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Arte Creativo",
    day: "Martes",
    age: "3-8 años",
    color: "orange",
    desc: "Pintura, collage y manualidades para expresar la creatividad libremente.",
  },
  {
    icon: <FaBookOpen />,
    title: "Cuentos en Inglés",
    day: "Miércoles",
    age: "4-10 años",
    color: "blue",
    desc: "Lectura interactiva en inglés con personajes, voces y preguntas.",
  },
  {
    icon: <TbGymnastics />,
    title: "Movimiento y Yoga",
    day: "Jueves",
    age: "2-6 años",
    color: "yellow",
    desc: "Ejercicios de equilibrio, coordinación y relajación adaptados a los niños.",
  },
  {
    icon: <FaMicroscope />,
    title: "Mini Científicos",
    day: "Viernes",
    age: "5-10 años",
    color: "orange",
    desc: "Experimentos simples y divertidos que despiertan la curiosidad científica.",
  },
  {
    icon: <FaMasksTheater />,
    title: "Teatro y Expresión",
    day: "Sábado",
    age: "4-12 años",
    color: "yellow",
    desc: "Obras, improvisación y juegos de roles para ganar confianza y vocabulario.",
  },
];

export default function Activities() {
  return (
    <section id="actividades" className="activities">
      <div className="container">
        <span className="section-label">Actividades semanales</span>
        <h2 className="section-title">
          Algo emocionante <span>cada día</span>
        </h2>
        <p className="section-subtitle">
          Nuestro calendario semanal está lleno de actividades pensadas para
          estimular, divertir y enseñar a cada pequeño explorador.
        </p>

        <div className="activities__grid">
          {activities.map((a) => (
            <div
              key={a.title}
              className={`activity-card activity-card--${a.color}`}
            >
              <div className="activity-card__header">
                <span className="activity-card__icon">{a.icon}</span>
                <div>
                  <span className="activity-card__day">{a.day}</span>
                  <span className="activity-card__age">{a.age}</span>
                </div>
              </div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
