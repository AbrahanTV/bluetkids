import { useState } from "react";
import "./EnrollmentForm.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

const initialState = {
  childName: "",
  childAge: "",
  childDob: "",
  kidSchedule: "",
  hasCondition: "",
  conditionDetail: "",
  hasAllergy: "",
  allergyDetail: "",
  dadName: "",
  dadPhone: "",
  momName: "",
  momPhone: "",
  emergencyName: "",
  emergencyPhone: "",
  emergencyRelation: "",
  address: "",
  message: "",
};

export default function EnrollmentForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="inscripcion" className="enrollment">
      <div className="enrollment__inner container">
        <div className="enrollment__info">
          <span className="section-label">Inscripciones abiertas</span>
          <h2 className="enrollment__title">
            ¡Dale a tu hijo el mejor <span>comienzo</span>!
          </h2>
          <p>
            Completa el formulario y uno de nuestros asesores se pondrá en
            contacto contigo en menos de 24 horas para guiarte en el proceso.
          </p>
          <ul className="enrollment__perks">
            <li><span><FaCheckCircle /></span> Primera clase de prueba gratis</li>
            <li><span><FaCheckCircle /></span> Sin costo de inscripción el primer mes</li>
            <li><span><FaCheckCircle /></span> Evaluación diagnóstica incluida</li>
            <li><span><FaCheckCircle /></span> Atención personalizada</li>
          </ul>
        </div>

        <form className="enrollment__form" onSubmit={handleSubmit}>
          <h3>Formulario de inscripción</h3>

          <div className="form-group">
            <label htmlFor="childName">Nombre completo del niño/a *</label>
            <input
              id="childName" name="childName" type="text"
              placeholder="Ej. Sofía García"
              value={form.childName} onChange={handleChange} required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="childAge">Edad *</label>
              <input
                id="childAge" name="childAge" type="number"
                placeholder="Años" min="1" max="15"
                value={form.childAge} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="childDob">Fecha de nacimiento *</label>
              <input
                id="childDob" name="childDob" type="date"
                value={form.childDob} onChange={handleChange} required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Horario en que asistirá el niño/a *</label>
            <div className="radio-group">
              <label className={`radio-card ${form.kidSchedule === "regular" ? "radio-card--selected" : ""}`}>
                <input type="radio" name="kidSchedule" value="regular"
                  checked={form.kidSchedule === "regular"} onChange={handleChange} required />
                <span className="radio-card__title">Horario Regular</span>
                <span className="radio-card__desc">Lunes a Viernes · 8:00am – 12:00pm</span>
              </label>
              <label className={`radio-card ${form.kidSchedule === "extendido" ? "radio-card--selected" : ""}`}>
                <input type="radio" name="kidSchedule" value="extendido"
                  checked={form.kidSchedule === "extendido"} onChange={handleChange} />
                <span className="radio-card__title">Horario Extendido</span>
                <span className="radio-card__desc">Lun–Jue · 8:00am – 4:00pm · Vie · 8:00am – 12:00pm</span>
              </label>
            </div>
          </div>

          <div className="form-parents-grid">
            <div>
              <div className="form-group">
                <label>¿Padece el niño/a de alguna condición médica?<span style={{whiteSpace:"nowrap"}}> *</span></label>
                <div className="radio-group">
                  <label className={`radio-card ${form.hasCondition === "no" ? "radio-card--selected" : ""}`}>
                    <input type="radio" name="hasCondition" value="no"
                      checked={form.hasCondition === "no"} onChange={handleChange} required />
                    <span className="radio-card__title">No</span>
                  </label>
                  <label className={`radio-card ${form.hasCondition === "si" ? "radio-card--selected" : ""}`}>
                    <input type="radio" name="hasCondition" value="si"
                      checked={form.hasCondition === "si"} onChange={handleChange} />
                    <span className="radio-card__title">Sí</span>
                  </label>
                </div>
              </div>
              {form.hasCondition === "si" && (
                <div className="form-group">
                  <label htmlFor="conditionDetail">Por favor especifique *</label>
                  <textarea id="conditionDetail" name="conditionDetail" rows="2"
                    placeholder="Ej. Asma, necesidades especiales"
                    value={form.conditionDetail} onChange={handleChange} required />
                </div>
              )}
            </div>
            <div style={{ paddingTop: "1.4rem" }}>
              <div className="form-group">
                <label>¿Tiene el niño/a alguna alergia? *</label>
                <div className="radio-group">
                  <label className={`radio-card ${form.hasAllergy === "no" ? "radio-card--selected" : ""}`}>
                    <input type="radio" name="hasAllergy" value="no"
                      checked={form.hasAllergy === "no"} onChange={handleChange} required />
                    <span className="radio-card__title">No</span>
                  </label>
                  <label className={`radio-card ${form.hasAllergy === "si" ? "radio-card--selected" : ""}`}>
                    <input type="radio" name="hasAllergy" value="si"
                      checked={form.hasAllergy === "si"} onChange={handleChange} />
                    <span className="radio-card__title">Sí</span>
                  </label>
                </div>
              </div>
              {form.hasAllergy === "si" && (
                <div className="form-group">
                  <label htmlFor="allergyDetail">Por favor especifique *</label>
                  <textarea id="allergyDetail" name="allergyDetail" rows="2"
                    placeholder="Ej. Alergia al maní, al polvo, a los lácteos..."
                    value={form.allergyDetail} onChange={handleChange} required />
                </div>
              )}
            </div>
          </div>

          <div className="form-parents-grid">
            <div>
              <label className="form-group__section-label">Información del padre</label>
              <div className="form-group">
                <label htmlFor="dadName">Nombre completo *</label>
                <input id="dadName" name="dadName" type="text"
                  placeholder="Ej. Juan García"
                  value={form.dadName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="dadPhone">Teléfono *</label>
                <input id="dadPhone" name="dadPhone" type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={form.dadPhone} onChange={handleChange} required />
              </div>
            </div>
            <div>
              <label className="form-group__section-label">Información de la madre</label>
              <div className="form-group">
                <label htmlFor="momName">Nombre completo *</label>
                <input id="momName" name="momName" type="text"
                  placeholder="Ej. María García"
                  value={form.momName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="momPhone">Teléfono *</label>
                <input id="momPhone" name="momPhone" type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={form.momPhone} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-group__section-label">Contacto de emergencia</label>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="emergencyName">Nombre completo *</label>
                <input id="emergencyName" name="emergencyName" type="text"
                  placeholder="Ej. Ana Martínez"
                  value={form.emergencyName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="emergencyPhone">Teléfono *</label>
                <input id="emergencyPhone" name="emergencyPhone" type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={form.emergencyPhone} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="emergencyRelation">Parentesco *</label>
              <input id="emergencyRelation" name="emergencyRelation" type="text"
                placeholder="Ej. Abuela, tío, vecino..."
                value={form.emergencyRelation} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Dirección del hogar *</label>
            <input id="address" name="address" type="text"
              placeholder="Calle, número, sector..."
              value={form.address} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Información adicional sobre el niño/a (opcional)</label>
            <textarea id="message" name="message" rows="2"
              placeholder="Ej. Le cuesta adaptarse a grupos grandes, es zurdo/a, le encanta dibujar..."
              value={form.message} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary enrollment__submit"
            disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar solicitud"}
          </button>

          {status === "success" && (
            <div className="enrollment__feedback enrollment__feedback--success">
              ¡Solicitud enviada! Te contactaremos pronto. <MdCelebration />
            </div>
          )}
          {status === "error" && (
            <div className="enrollment__feedback enrollment__feedback--error">
              Ocurrió un error. Por favor intenta de nuevo o escríbenos directamente.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
