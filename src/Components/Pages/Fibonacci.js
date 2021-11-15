import React, { useState, useEffect} from 'react';
import axios from 'axios';

import '../../App.css'

const Fibonacci = () => {
  const [calculating, setIsCalculating] = useState(false)
  const [canCalculate, setCanCalculate] = useState(false)
  const [number, setNumber] = useState(null)
  const [fibonacci, setFibonacci] = useState(null)

  const calculateFibonacci = async () => {
    setIsCalculating(true)
    axios.get(`http://localhost:3001/fibonacci?number=${number}`)
    .then(({data}) => setFibonacci(data.fibonacci))
    .finally(() => setIsCalculating(false))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    return calculateFibonacci()
  }

  useEffect(() => {
    setCanCalculate(number && number > 0)

  }, [number])

  const handleChange = (event) => {
    const numberValue = parseInt(event.target.value)
    setNumber(numberValue)
  }

  return (
    <div className="app-container">
      <div >
        <h1>Fibonacci</h1>
      </div>
      <br/>
      <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control lg"
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
        <h3>Resultado: {calculating ? 'Calculando el fibonacci' : fibonacci}</h3>
      </div>
    </div>
  );
}

export default Fibonacci;