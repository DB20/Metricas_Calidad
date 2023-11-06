import pytest
from flask import Flask, request
import unittest.mock
import unittest
import json
from flask_restful import Resource
from application import app, db
from vistas.vistas import VistaLogIn


class TestVistaLogIn(unittest.TestCase):
    @pytest.fixture
    def client(self):
        app.config['TESTING'] = True
        client = app.test_client()
        with app.app_context():
            db.create_all()
            yield client
            db.drop_all()

    def test_login_success(self):
        with app.test_request_context(data=json.dumps({
            'username': 'testuser',
            'password': 'testpassword',
        }), content_type='application/json'):
            response = VistaLogIn().post()
            assert response[1] == 200

    def test_login_failure(self):
        with app.test_request_context(data=json.dumps({
            'username': 'testuser_error',
            'password': 'testuser_error',
        }), content_type='application/json'):
            response = VistaLogIn().post()
            assert response[1] == 404

    def test_login_missing_fields(self):
        with app.test_request_context(data=json.dumps({
            'username': 'testuser_error',
        }), content_type='application/json'):
            response = VistaLogIn().post()
            assert response[1] == 400
