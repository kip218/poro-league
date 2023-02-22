import csv

DB_FILE = "standings.csv"

def read_db():
	teams = {}
	with open(DB_FILE, "r") as file:
		reader = csv.DictReader(file)
		for i, team in enumerate(reader):
			teams[i] = team
	return teams
