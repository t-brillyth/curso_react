import React, { Component } from 'react'

const users = [
  { id: 1, name: 'Tania Forero', country: 'Colombia'},
  { id: 2, name: 'Jessica Aguillon', country: 'USA'},
  { id: 3, name: 'Miguel Usaquen', country: 'Chile'},
  { id: 4, name: 'Rodrigo Fernandez', country: 'Peru'},
  { id: 5, name: 'Leonardo Sabedra', country: 'Guatemala'},
  { id: 6, name: 'Fernanda Valencia', country: 'España'}
]


// para el tema de las listas es importante utiizar KEY y debe ser un elemento que no sea repetitivo 
// En nuestro cao utilizaremos el ID ya que en una variable que no se repetira
class App extends Component {
  render () {
    return (
      <div>
        <h1>Iterando</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index + user.name}>
              { user.name }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App