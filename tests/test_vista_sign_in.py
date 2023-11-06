import pytest
from flask import Flask, request
import unittest.mock
import unittest
import json
from flask_restful import Resource
from application import app, db
from vistas.vistas import VistaSignIn
from datetime import datetime


class TestVistaSignIn(unittest.TestCase):
    @pytest.fixture
    def client(self):
        app.config['TESTING'] = True
        client = app.test_client()
        with app.app_context():
            db.create_all()
            yield client
            db.drop_all()

    def test_post_without_username(self):
        with app.test_request_context(data=json.dumps({
            'password': 'testpassword'
        }), content_type='application/json'):
            response = VistaSignIn().post()
            assert response[1] == 400

    def test_post_without_password(self):
        with app.test_request_context(data=json.dumps({
            'username': 'testuser'
        }), content_type='application/json'):
            response = VistaSignIn().post()
            assert response[1] == 400

    def test_post_existing_user(self):
        with app.test_request_context(data=json.dumps({
            'username': 'testuser',
            'password': 'testpassword'
        }), content_type='application/json'):
            response = VistaSignIn().post()
            assert response[1] == 412

    def test_post_with_all_fields(self):
        now = datetime.now()
        formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
        with app.test_request_context(data=json.dumps({
            'username': 'testuser_' + formatted_date,
            'password': 'testuser_' + formatted_date,
        }), content_type='application/json'):
            response = VistaSignIn().post()
            assert response[1] == 201
