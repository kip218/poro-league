import logging
import csv
from glob import glob

DB_FILE = "standings.csv"

def read_db():
	files = glob(DB_FILE, recursive=True)
	if not files:
		logging.warning("DB_FILE not found.")
		return
	file_name = files[0]

	teams = {}
	with open(file_name, "r") as file:
		reader = csv.DictReader(file)
		for i, team in enumerate(reader):
			teams[i] = team
	return teams
