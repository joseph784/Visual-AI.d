from backend import app
from flask import render_template, request
import openai

openai.api_key = app.config['OPENAI_API_KEY']

def summarizePrompt(prompt):
    response = openai.Completion.create(model="text-davinci-003", prompt="Summarize this for a second-grade student:\n\n"+prompt, temperature=0.7, max_tokens=64, top_p=1.0, frequency_penalty=0.0, presence_penalty=0.0)
    return response['choices'][0]['text']

def createImageFromPrompt(prompt):
    prompt = summarizePrompt(prompt)
    response = openai.Image.create(prompt=prompt, n=1, size="256x256")
    return response['data'][0]['url']

@app.route('/')
def index():
    prompt = request.args.get('prompt')
    image = createImageFromPrompt(prompt)
    return image