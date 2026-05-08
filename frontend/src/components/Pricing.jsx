import { Link } from 'react-router'
import "./Pricing.css";
import { FaStar } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";

const plans = [
  {
    name: "Explorador",
    price: "1500",
    color: "blue",
    description: "Ideal para comenzar el viaje de aprendizaje.",
    features: [
      "1 programa a elección",
      "2 clases por semana",
      "Material incluido",
      "Seguimiento mensual",
    ],
    cta: "Comenzar",
    featured: false,
  },
  {
    name: "Aventurero",
    price: "2500",
    color: "orange",
    description: "El plan más popular para un desarrollo completo.",
    features: [
      "2 programas a elección",
      "4 clases por semana",
      "Material incluido",
      "Seguimiento quincenal",
      "Acceso a actividades especiales",
    ],
    cta: "¡Lo quiero!",
    featured: true,
  },
  {
    name: "Campeón",
    price: "3800",
    color: "yellow",
    description: "Experiencia total para el pequeño explorador.",
    features: [
      "Todos los programas",
      "Clases ilimitadas",
      "Material incluido",
      "Seguimiento semanal",
      "Acceso a campamento de verano",
      "Sesión de evaluación mensual",
    ],
    cta: "Comenzar",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="pricing">
      <div className="container">
        <span className="section-label">Planes y precios</span>
        <h2 className="section-title">
          Inversión en el <span>futuro de tu hijo</span>
        </h2>
        <p className="section-subtitle">
          Planes flexibles adaptados a cada familia. Todos incluyen atención
          personalizada y un equipo de educadores certificados.
        </p>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card pricing-card--${plan.color} ${plan.featured ? "pricing-card--featured" : ""}`}
            >
              {plan.featured && (
                <div className="pricing-card__badge">
                  <FaStar /> Más popular
                </div>
              )}
              <h3>{plan.name}</h3>
              <p className="pricing-card__desc">{plan.description}</p>
              <div className="pricing-card__price">
                <span className="pricing-card__currency">$DOP</span>
                <span className="pricing-card__amount">{plan.price}</span>
                <span className="pricing-card__period">/mes</span>
              </div>
              <ul className="pricing-card__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="pricing-card__check">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/inscripcion"
                className={`btn ${plan.featured ? "btn-primary" : "btn-secondary"} pricing-card__cta`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="pricing__note">
          <TfiThought /> {""}
          ¿Tienes preguntas? <a href="#inscripcion">Contáctanos</a> y te
          ayudamos a elegir el plan perfecto.
        </p>
      </div>
    </section>
  );
}
