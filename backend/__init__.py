from flask import Flask
import config

app = Flask(__name__)
app.config.from_object(config.config['development'])

from backend import routes