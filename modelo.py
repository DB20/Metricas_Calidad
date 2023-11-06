from marshmallow import fields
from xml.etree.ElementInclude import include
from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

db = SQLAlchemy()


class UserMail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(1024))
    app = db.Column(db.String(1024))
    motivo = db.Column(db.String(1024))
    ip = db.Column(db.String(1024))
    createdAt = db.Column(db.String(1024))


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(1024))
    password = db.Column(db.String(1024))


class UserMailSchema (SQLAlchemyAutoSchema):
    class Meta:
        model = UserMail
        include_relationships = False 
        load_instance = True
