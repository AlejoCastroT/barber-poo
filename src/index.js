import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Inicio } from './components/inicio/Inicio';
import { About } from './components/about/About';
import Contacto from './components/Contacto/contacto';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Precios from './components/Precios/precios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Inicio/>
    <About/>
    <Precios/>
    <Contacto/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
