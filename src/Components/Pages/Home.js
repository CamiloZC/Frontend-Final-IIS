import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function Home() {
  return (
    <div className="app-container">
        <div >
            <h1>Bienvenido, elige la operación que desees realizar:</h1>
        </div>
        <br/>
        <div className="app-btns">
            <div>
                <Link to='/fibonacci'>
                    <button type="button" class="btn btn-primary btn-lg">
                        Fibonacci
                    </button>
                </Link>
            </div>
            <div>
                <Link to='/factorial'>
                    <button type="button" class="btn btn-primary btn-lg">
                        Factorial
                    </button>
                </Link>
            </div>
        </div>
        <br/>
        <div >
            <h1>Calcula el área y perimetro de estas figuras:</h1>
        </div>
        <br/>
        <div className="app-btns">
            <div>
                <Link to='/triangulo'>
                    <button type="button" class="btn btn-primary btn-lg">
                        Triángulo
                    </button>
                </Link>
            </div>
            <div>
                <Link to='/circulo'>
                    <button type="button" class="btn btn-primary btn-lg">
                        Círculo
                    </button>
                </Link>
            </div>
            <div>
                <Link to='/rectangulo'>
                    <button type="button" class="btn btn-primary btn-lg">
                        Rectángulo
                    </button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Home;