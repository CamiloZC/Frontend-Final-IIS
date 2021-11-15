import React, {useState, useEffect} from 'react';
import axios from 'axios';

import '../../App.css'

const Circulo = (props) => {
  const [calculatingPerimeter, setIsCalculatingPerimeter] = useState(false)
  const [calculatingArea, setIsCalculatingArea] = useState(false)
  const [canCalculate, setCanCalculate] = useState(false)
  const [perimeter, setPerimeter] = useState(null)
  const [area, setArea] = useState(null)
  const [radio, setRadio] = useState(null)

  const calculatePerimeter = async () => {
    setIsCalculatingPerimeter(true)
    axios.get(`https://final-app-iis.herokuapp.com/perimeter/circle?radio=${radio}`)
    .then(({data}) => setPerimeter(data.perimeter))
    .finally(() => setIsCalculatingPerimeter(false))
  }

  const calculateArea = async () => {
    setIsCalculatingArea(true)
    axios.get(`https://final-app-iis.herokuapp.com/area/circle?radio=${radio}`)
    .then(({data}) => setArea(data.area))
    .finally(() => setIsCalculatingArea(false))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    return Promise.all([
      calculatePerimeter(),
      calculateArea()
    ])
  }

  useEffect(() => {
    setCanCalculate(radio && radio > 0)

  }, [radio])

  const handleChange = (event) => {
    const radioValue = parseInt(event.target.value)
    setRadio(radioValue)
  }

  const isCalculating = calculatingPerimeter || calculatingArea

  return (
    <div className="app-container">
      <div >
        <h1>Área y Perimetro del Círculo</h1>
      </div>
      <br/>
      <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="number" className="form-control form-control lg"
                    placeholder="Inserte el radio" min={0} onChange={handleChange} disabled={isCalculating}/>
                </div>
                <div className="form-group col-md-4">
                <button disabled={isCalculating || !canCalculate} type="submit" className="btn btn-danger">
                        {isCalculating ? 'Calculando' : 'Calcular'}
                        </button>
                </div>
            </div>
        </form>
      <br/>
      <div className="app-results">
              <h3>Área: {calculatingArea ? 'Calculando el área' : area}</h3>
              <h3>Perímetro: {calculatingPerimeter ? 'Calculando el perímetro' : perimeter}</h3>
          </div>
    </div>
  );
}

export default Circulo;