from tokenize import String
from flask import request, jsonify, Flask
from flask_jwt_extended import jwt_required, create_access_token, get_jwt, JWTManager, get_jwt_identity
from flask_restful import Resource, Api
# from flask_cors import CORS
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import joinedload
import decimal
import json
from flask.json import JSONEncoder
from flask import current_app as app
import os
import jwt
from modelo import User, db
from datetime import datetime, timedelta
from vistas.vistas import Ping, VistaSignIn, VistaLogIn, AddMail, GetEmail

application = Flask(__name__)
if os.environ.get("RDS_USERNAME", None):
    application.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{os.environ["RDS_USERNAME"]}:{os.environ["RDS_PASSWORD"]}@{os.environ["RDS_HOSTNAME"]}:{os.environ["RDS_PORT"]}/{os.environ["RDS_DB_NAME"]}'
else: 
    application.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///baseListaNegra.db'
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.config['JWT_SECRET_KEY'] = 'frase-secreta'
application.config['PROPAGATE_EXCEPTIONS'] = True
application.config['DEBUG'] = True


app_context = application.app_context()
app_context.push()

db.init_app(application)
db.create_all()

api = Api(application)
api.add_resource(VistaSignIn, '/users/')
api.add_resource(VistaLogIn, '/users/auth')
api.add_resource(Ping, '/users/ping')
api.add_resource(AddMail, '/blacklists')
api.add_resource(GetEmail, '/blacklists/<string:stremail>')


jwt = JWTManager(app)
