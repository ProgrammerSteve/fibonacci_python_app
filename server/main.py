from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
from typing import Any, Tuple
import os

import utils.fibonacci as fibonacci

template_path=os.path.join(os.path.dirname(__file__), '../client')
app = Flask(__name__, template_folder=template_path)
CORS(app)

@app.route('/api/fibonacci', methods=['GET'])
def get_fibonacci() -> Tuple[Any, int]:
    try:
        n: int = int(request.args.get('number', ''))
        if n < 0:
            return jsonify({'error': 'Number must be non-negative'}), 400
        return jsonify({'result': fibonacci(n)}), 200
    except ValueError:
        return jsonify({'error': 'Invalid input'}), 400
    
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory(template_path, filename)

if __name__ == '__main__':
    app.run(debug=True)
