from flask import Flask, request
from datetime import datetime
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
productos = []

@app.route('/')
def rutaInicial():
    print('ingreso al endpoint inicial')
    return 'Bienvenido a tu primera API de Codigo de Backend'


@app.route('/estado')
def estadoAPI():
    return {
        'hora': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }


@app.route('/producto', methods=['POST'])
def gestionProductos():

    print(request.get_json())
    producto = request.get_json()
    productos.append(producto)
    return {
        'message': 'Producto creado exitosamente',
        'content': producto
    }


@app.route('/devolver-productos', methods=['GET'])
def devolverProductos():
    return {
        'message': 'Los productos son',
        'content': productos
    }



app.run(debug=True)