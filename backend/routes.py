from backend import app
from flask import render_template, request
import openai
from flask_cors import CORS

openai.api_key = app.config['OPENAI_API_KEY']
CORS(app)

def summarizePrompt(prompt):
    response = openai.Completion.create(model="text-davinci-003", prompt="Summarize this for a second-grade student:\n\n"+prompt, temperature=0.7, max_tokens=64, top_p=1.0, frequency_penalty=0.0, presence_penalty=0.0)
    return response['choices'][0]['text']

def createImageFromPrompt(prompt):
    prompt = summarizePrompt(prompt)
    response = openai.Image.create(prompt=prompt, n=1, size="256x256")
    return response['data'][0]['url']

@app.route('/')
def index():
    image = createImageFromPrompt("Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.")
    return image