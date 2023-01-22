from backend import app
from flask import render_template, request
import openai

openai.api_key = app.config['OPENAI_API_KEY']

def createImageFromPrompt(prompt):
    response = openai.Image.create(prompt=prompt, n=1, size="512x512")
    return response['data'][0]

@app.route('/')
def index():
    image = createImageFromPrompt('four people working on a hackathon project')
    return render_template('index.html', image=image)