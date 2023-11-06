import pytest
from flask import Flask, request
import unittest.mock
import unittest
import json
from flask_restful import Resource
from application import app, db
from vistas.vistas import AddMail, UserMail
from flask_jwt_extended import JWTManager
from datetime import datetime


class TestVistaAddMail(unittest.TestCase):

    jwt = JWTManager(app)

    # @jwt.user_identity_loader
    def user_identity_lookup(self, user):
        return user.id

    # @jwt.user_loader_callback_loader
    def user_loader_callback(self, identity):
        return UserMail.query.get(identity)

    @pytest.fixture
    def client(self):
        app.config['TESTING'] = True
        client = app.test_client()
        with app.app_context():
            db.create_all()
            yield client
            db.drop_all()

    def test_add_mail_success(self):
        with app.test_client() as client:
            # Autenticar un usuario real en su sistema y obtener un token JWT válido.
            data = {
                'username': 'testuser',
                'password': 'testpassword'
            }
            response = client.post(
                "/users/auth", data=json.dumps(data), headers={"Content-Type": "application/json"})
            token = response.json["token"]

            # Agregue el token JWT al encabezado de autorización de la solicitud.
            headers = {
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json"
            }
            now = datetime.now()
            formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
            with app.test_request_context(data=json.dumps({
                'email': 'test_' + formatted_date +'@test.com',
                'app_uuid': 'testapp'
            }), headers=headers, content_type='application/json'):
                response = AddMail().post()
                assert response[1] == 201

    def test_add_mail_missing_fields(self):
        with app.test_client() as client:
            # Autenticar un usuario real en su sistema y obtener un token JWT válido.
            data = {
                'username': 'testuser',
                'password': 'testpassword'
            }
            response = client.post(
                "/users/auth", data=json.dumps(data), headers={"Content-Type": "application/json"})
            token = response.json["token"]

            # Agregue el token JWT al encabezado de autorización de la solicitud.
            headers = {
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json"
            }
            with app.test_request_context(data=json.dumps({
            }), headers=headers, content_type='application/json'):
                response = AddMail().post()
                assert response[1] == 400
