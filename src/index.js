import React from 'react';
import ReactDOM from 'react-dom';

const saludo = <h1>Hola Mundo</h1>


const divRoot = document.querySelector('#root');

//console.log(divRoot);

ReactDOM.render( saludo, divRoot );