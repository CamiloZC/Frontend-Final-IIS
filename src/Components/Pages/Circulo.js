import React from 'react';
import '../../App.css'

function Circulo() {
  return (
    <div className="app-container">
      <div >
        <h1>Área y Perimetro del Círculo</h1>
      </div>
      <br/>
      <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control lg"
                    placeholder="Inserte el radio" />
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" class="btn btn-danger"
                    value="Calcular" />
                </div>
            </div>
        </form>
      <br/>
      <div className="app-results">
        <h3>Área:</h3>
        <h3>Perimetro:</h3>
      </div>
    </div>
  );
}

export default Circulo;