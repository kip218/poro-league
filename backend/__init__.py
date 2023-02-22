from flask import Flask
api = Flask(__name__)

from backend import endpoints

api.run()