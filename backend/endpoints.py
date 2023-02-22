from backend import api
from flask import render_template
from .tools import read_db

@api.route('/get_teams')
def get_teams():
    response = read_db()
    return response
    # return {"members": ["Member1", "Member2"]}