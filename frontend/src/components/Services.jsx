import "./Services.css";
import { RiSpeakLine } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { RiBookShelfLine } from "react-icons/ri";

const services = [
  {
    icon: <RiSpeakLine />,
    color: "blue",
    title: "Inglés",
    description:
      "Clases dinámicas y divertidas de inglés adaptadas a cada edad, desde bebés hasta escolares. Metodología comunicativa 100% práctica.",
    tags: ["Conversación", "Fonética", "Listening"],
  },
  {
    icon: <GiBrain />,
    color: "orange",
    title: "Estimulación Temprana",
    description:
      "Actividades diseñadas para potenciar el desarrollo cognitivo, motor y emocional de los más pequeños en sus primeros años de vida.",
    tags: ["0-3 años", "Sensorial", "Motricidad"],
  },
  {
    icon: <RiBookShelfLine />,
    color: "yellow",
    title: "Apoyo Educativo",
    description:
      "Refuerzo escolar personalizado para que tu hijo supere sus dificultades académicas con confianza y herramientas efectivas.",
    tags: ["Tareas", "Lectura", "Matemáticas"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <span className="section-label">Lo que ofrecemos</span>
        <h2 className="section-title">
          Programas para <span>pequeños exploradores</span>
        </h2>
        <p className="section-subtitle">
          Cada programa está diseñado por profesionales apasionados por la
          educación infantil, en un ambiente cálido y estimulante.
        </p>

        <div className="services__grid">
          {services.map((s) => (
            <div
              key={s.title}
              className={`service-card service-card--${s.color}`}
            >
              <div className="service-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="service-card__tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="service-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
