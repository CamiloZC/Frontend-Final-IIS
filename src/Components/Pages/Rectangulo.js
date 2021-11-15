import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../App.css'

const Rectangulo = (props) => {
  const [calculatingPerimeter, setIsCalculatingPerimeter] = useState(false)
  const [calculatingArea, setIsCalculatingArea] = useState(false)
  const [canCalculate, setCanCalculate] = useState(false)
  const [perimeter, setPerimeter] = useState(null)
  const [area, setArea] = useState(null)
  const [sides, setSides] = useState({
    sideA : 0,
    sideB : 0
  })

  const calculatePerimeter = async () => {
    setIsCalculatingPerimeter(true)
    axios.get(`https://final-app-iis.herokuapp.com/perimeter/rectangle?sideA=${sides.sideA}&sideB=${sides.sideB}`)
    .then(({data}) => setPerimeter(data.perimeter))
    .finally(() => setIsCalculatingPerimeter(false))
  }

  const calculateArea = async () => {
    setIsCalculatingArea(true)
    axios.get(`https://final-app-iis.herokuapp.com/area/rectangle?sideA=${sides.sideA}&sideB=${sides.sideB}`)
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
    const checkCanCalculate = Object.keys(sides).every(key => sides[key] && sides[key] > 0)

    setCanCalculate(checkCanCalculate)

  }, [sides])

  const handleChange = (event, side) => {
    const sideValue = parseInt(event.target.value)
    setSides(currentSidesValues => ({
      ...currentSidesValues,
      [side]:sideValue
    }))
  }

  const isCalculating = calculatingPerimeter || calculatingArea

    return (
      <div className="app-container">
        <div >
          <h1>Área y Perimetro del Rectángulo</h1>
        </div>
        <br/>
        <div >
          <h2>Inserta las medidas del Rectángulo:</h2>
        </div>
        <br/>
        <form onSubmit={handleSubmit}>
              <div className="app-input">
                  <div className="form-group col-md-1"/>
                  <div className="form-group col-md-2">
                      <input type="number" className="form-control form-control lg"
                      placeholder="Lado #1" min={0} onChange={e => handleChange(e, 'sideA')} disabled={isCalculating} />
                  </div>
                  <div className="form-group col-md-1"/>
                  <div className="form-group col-md-2">
                      <input type="number" className="form-control form-control lg"
                      placeholder="Lado #2" min={0} onChange={e => handleChange(e, 'sideB')} disabled={isCalculating}/>
                  </div>
                  <div className="form-group col-md-1"/>
                  <div className="form-group col-md-2">
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

export default Rectangulo