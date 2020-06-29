import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Tania Forero'

const user1 = {
    name: 'Tania Forero',
    age: 24,
    country: 'Colombia'
}

function getInfo(user) {
    return `Hola mi nombre es ${name} y soy de ${user.country}`
}

const App = <h1> { getInfo(user1) } </h1>

ReactDOM.render(App, document.getElementById('root'))