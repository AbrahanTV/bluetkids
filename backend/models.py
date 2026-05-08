from extensions import db
from datetime import datetime, timezone


class Enrollment(db.Model):
    __tablename__ = "enrollments"

    id = db.Column(db.Integer, primary_key=True)

    # Child info
    child_name = db.Column(db.String(150), nullable=False)
    child_age = db.Column(db.Integer, nullable=False)
    child_dob = db.Column(db.Date, nullable=False)
    kid_schedule = db.Column(db.String(20), nullable=False)

    # Medical
    has_condition = db.Column(db.String(5), nullable=False)
    condition_detail = db.Column(db.Text)
    has_allergy = db.Column(db.String(5), nullable=False)
    allergy_detail = db.Column(db.Text)

    # Parents
    dad_name = db.Column(db.String(150), nullable=False)
    dad_phone = db.Column(db.String(30), nullable=False)
    mom_name = db.Column(db.String(150), nullable=False)
    mom_phone = db.Column(db.String(30), nullable=False)

    # Emergency contact
    emergency_name = db.Column(db.String(150), nullable=False)
    emergency_phone = db.Column(db.String(30), nullable=False)
    emergency_relation = db.Column(db.String(100), nullable=False)

    # Other
    address = db.Column(db.String(300), nullable=False)
    message = db.Column(db.Text)

    # Admin
    status = db.Column(db.String(20), default="pending")
    created_at = db.Column(
        db.DateTime, default=lambda: datetime.now(timezone.utc)
    )
