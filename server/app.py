from flask import Flask
from flask import jsonify
import json
from flask_cors import CORS
# from flask_restful import Api, Resource, reqparse
# import pandas as pd

r = open('sample.json')
data = json.load(r)

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Add /config to the end of the url to get response'

@app.route('/config')
def theFunc():
    return jsonify(data)

if __name__ == '__main__':
    app.run()