from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, mail


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

    db.init_app(app)
    mail.init_app(app)

    from routes.enroll import enroll_bp
    app.register_blueprint(enroll_bp)

    return app


if __name__ == "__main__":
    app = create_app()
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
