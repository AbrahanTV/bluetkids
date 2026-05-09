from flask import Blueprint, request, jsonify, current_app
from flask_mail import Message
from extensions import db, mail
from models import Enrollment
from datetime import datetime

enroll_bp = Blueprint("enroll", __name__)


@enroll_bp.route("/api/enroll", methods=["POST"])
def enroll():
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "Invalid JSON"}), 400

    try:
        enrollment = Enrollment(
            child_name=data["childName"],
            child_age=int(data["childAge"]),
            child_dob=datetime.strptime(data["childDob"], "%Y-%m-%d").date(),
            kid_schedule=data["kidSchedule"],
            has_condition=data["hasCondition"],
            condition_detail=data.get("conditionDetail") or "",
            has_allergy=data["hasAllergy"],
            allergy_detail=data.get("allergyDetail") or "",
            dad_name=data["dadName"],
            dad_phone=data["dadPhone"],
            mom_name=data["momName"],
            mom_phone=data["momPhone"],
            emergency_name=data["emergencyName"],
            emergency_phone=data["emergencyPhone"],
            emergency_relation=data["emergencyRelation"],
            address=data["address"],
            message=data.get("message") or "",
        )
        db.session.add(enrollment)
        db.session.commit()
    except (KeyError, ValueError) as e:
        db.session.rollback()
        return jsonify({"error": f"Missing or invalid field: {e}"}), 422
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Database error"}), 500

    _send_notification(enrollment)

    return jsonify({"message": "Solicitud recibida"}), 201


def _send_notification(enrollment: Enrollment):
    center_email = current_app.config.get("CENTER_EMAIL")
    if not center_email:
        return

    schedule_label = (
        "Horario Regular · Lun–Vie 8:00am–12:00pm"
        if enrollment.kid_schedule == "regular"
        else "Horario Extendido · Lun–Jue 8:00am–4:00pm, Vie 8:00am–12:00pm"
    )

    condition_row = (
        f"<tr><td><b>Condición médica</b></td><td>{enrollment.condition_detail}</td></tr>"
        if enrollment.has_condition == "si"
        else "<tr><td><b>Condición médica</b></td><td>No</td></tr>"
    )
    allergy_row = (
        f"<tr><td><b>Alergias</b></td><td>{enrollment.allergy_detail}</td></tr>"
        if enrollment.has_allergy == "si"
        else "<tr><td><b>Alergias</b></td><td>No</td></tr>"
    )

    html = f"""
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="background:#29ABE2;padding:24px 32px;">
        <h2 style="color:#fff;margin:0;">Nueva solicitud de inscripción</h2>
        <p style="color:#e0f4ff;margin:4px 0 0;">Bluet Kids · {enrollment.created_at.strftime('%d/%m/%Y %H:%M')}</p>
      </div>
      <div style="padding:24px 32px;">

        <h3 style="color:#29ABE2;border-bottom:2px solid #e5e7eb;padding-bottom:8px;">Información del niño/a</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 0;width:45%;color:#6b7280;"><b>Nombre</b></td><td>{enrollment.child_name}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;"><b>Edad</b></td><td>{enrollment.child_age} años</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;"><b>Fecha de nacimiento</b></td><td>{enrollment.child_dob.strftime('%d/%m/%Y')}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;"><b>Horario</b></td><td>{schedule_label}</td></tr>
        </table>

        <h3 style="color:#29ABE2;border-bottom:2px solid #e5e7eb;padding-bottom:8px;margin-top:24px;">Salud</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#6b7280;">
          {condition_row}
          {allergy_row}
        </table>

        <h3 style="color:#29ABE2;border-bottom:2px solid #e5e7eb;padding-bottom:8px;margin-top:24px;">Padres</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#6b7280;">
          <tr><td style="padding:6px 0;width:45%;"><b>Padre</b></td><td>{enrollment.dad_name} · {enrollment.dad_phone}</td></tr>
          <tr><td style="padding:6px 0;"><b>Madre</b></td><td>{enrollment.mom_name} · {enrollment.mom_phone}</td></tr>
        </table>

        <h3 style="color:#29ABE2;border-bottom:2px solid #e5e7eb;padding-bottom:8px;margin-top:24px;">Contacto de emergencia</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#6b7280;">
          <tr><td style="padding:6px 0;width:45%;"><b>Nombre</b></td><td>{enrollment.emergency_name}</td></tr>
          <tr><td style="padding:6px 0;"><b>Teléfono</b></td><td>{enrollment.emergency_phone}</td></tr>
          <tr><td style="padding:6px 0;"><b>Parentesco</b></td><td>{enrollment.emergency_relation}</td></tr>
        </table>

        <h3 style="color:#29ABE2;border-bottom:2px solid #e5e7eb;padding-bottom:8px;margin-top:24px;">Otros</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#6b7280;">
          <tr><td style="padding:6px 0;width:45%;"><b>Dirección</b></td><td>{enrollment.address}</td></tr>
          {"<tr><td style='padding:6px 0;'><b>Notas</b></td><td>" + enrollment.message + "</td></tr>" if enrollment.message else ""}
        </table>

      </div>
      <div style="background:#f9fafb;padding:16px 32px;text-align:center;font-size:12px;color:#9ca3af;">
        Bluet Kids · La Vega, República Dominicana
      </div>
    </div>
    """

    try:
        msg = Message(
            subject=f"Nueva inscripción — {enrollment.child_name}",
            recipients=[center_email],
            html=html,
        )
        mail.send(msg)
    except Exception:
        pass
