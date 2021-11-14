import React from 'react';
import '../../App.css'

function Fibonacci() {
  return (
    <div className="app-container">
      <div >
        <h1>Fibonacci</h1>
      </div>
      <br/>
      <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control lg"
                    placeholder="Número de iteraciones" />
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" class="btn btn-danger"
                    value="Calcular" />
                </div>
            </div>
        </form>
      <br/>
      <div >
        <h3>Resultado:</h3>
      </div>
    </div>
  );
}

export default Fibonacci;