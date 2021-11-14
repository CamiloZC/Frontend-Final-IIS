import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Fibonacci from './Components/Pages/Fibonacci';
import Factorial from './Components/Pages/Factorial';
import Triangulo from './Components/Pages/Triangulo';
import Circulo from './Components/Pages/Circulo';
import Rectangulo from './Components/Pages/Rectangulo';

function App() {
  return (    
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/fibonacci' element = { <Fibonacci /> } />
        <Route path='/factorial' element = { <Factorial /> } />
        <Route path='/triangulo' element = { <Triangulo /> } />
        <Route path='/circulo' element = { <Circulo /> } />
        <Route path='/rectangulo' element = { <Rectangulo /> } />
      </Routes>
    </Router>
  );
}

export default App;
