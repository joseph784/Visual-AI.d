from flask import Flask
from flask_cors import CORS
import config

app = Flask(__name__)
app.config.from_object(config.config['development'])
CORS(app)

from backend import routes