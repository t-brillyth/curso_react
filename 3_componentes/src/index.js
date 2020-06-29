import React from 'react';
import ReactDOM from 'react-dom';

//Funcionales
//function TarjetaFruta () {
//  return <div>Hola</div> 
//}


//Función de flecha
const TarjetaFruta = () => (
  <div>
    <h3>Titulo Funcion Flecha</h3>
    <hr/>
    <p>Descripción de dicha función...</p>
  </div>
)

const App = () => (
  <div>
      <TarjetaFruta />
      <hr/>
      <TarjetaFruta>
        Hola Función
      </TarjetaFruta>
  </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))