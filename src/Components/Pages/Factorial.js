import React, { useState, useEffect} from 'react';
import axios from 'axios';

import '../../App.css'

const Factorial = () => {
  const [calculating, setIsCalculating] = useState(false)
  const [canCalculate, setCanCalculate] = useState(false)
  const [number, setNumber] = useState(null)
  const [factorial, setFactorial] = useState(null)

  const calculateFactorial = async () => {
    setIsCalculating(true)
    axios.get(`https://final-app-iis.herokuapp.com/factorial?number=${number}`)
    .then(({data}) => setFactorial(data.factorial))
    .finally(() => setIsCalculating(false))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    return calculateFactorial()
  }

  useEffect(() => {
    setCanCalculate(number >= 0)

  }, [number])

  const handleChange = (event) => {
    const numberValue = parseInt(event.target.value)
    setNumber(numberValue)
  }

  return (
    <div className="app-container">
      <div >
        <h1>Factorial</h1>
      </div>
      <br/>
      <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="number" className="form-control form-control lg"
                    placeholder="Inserte el número" onChange={handleChange} disabled={calculating} />
                </div>
                <div className="form-group col-md-4">
                <button disabled={calculating || !canCalculate} type="submit" className="btn btn-danger">
                        {calculating ? 'Calculando' : 'Calcular'}
                        </button>
                </div>
            </div>
        </form>
      <br/>
      <div >
        <h3>Resultado: {calculating ? 'Calculando el factorial' : factorial}</h3>
      </div>
    </div>
  );
}

export default Factorial;