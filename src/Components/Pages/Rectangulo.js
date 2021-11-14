import React from 'react';
import '../../App.css'

function Rectangulo() {
  return (
    <div className="app-container">
      <div >
        <h1>Área y Perimetro del Rectángulo</h1>
      </div>
      <br/>
      <div >
        <h2>Inserta las medidas del rectángulo:</h2>
      </div>
      <br/>
      <form>
            <div className="app-input">
               
                <div className="form-group col-md-4">
                    <input type="text" className="form-control form-control lg"
                    placeholder="Lado #1" />
                </div>
                <div className="form-group col-md-1"/>
                <div className="form-group col-md-4">
                    <input type="text" className="form-control form-control lg"
                    placeholder="Lado #2" />
                </div>
                <div className="form-group col-md-1"/>
                <div className="form-group col-md-2">
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

export default Rectangulo;