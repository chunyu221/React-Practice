from flask import Flask, request, jsonify, make_response
import json
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
cors = CORS(app)

@app.route("/callback", methods=['POST', 'GET'])
# @app.after_request

def callback():
    if request.method == 'POST':
        val = request.get_data()
        print(val)
        

    elif request.method == 'GET':
        response = make_response(jsonify({"method" : "get"}))

    response = make_response(jsonify({"method" : "post"}))
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
        
    return response
    
if __name__ == '__main__':
    app.run(debug=True) 