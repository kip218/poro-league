from flask import Flask
from waitress import serve
import logging
from tools import read_db


api = Flask(__name__)


@api.route('/get_teams')
def get_teams():
    response = read_db()
    return response


if __name__ == '__main__':
    host = '127.0.0.1'
    port = '5000'
    print(f"Running Flask Server at {host}:{port}")
    serve(api, host=host, port=port)