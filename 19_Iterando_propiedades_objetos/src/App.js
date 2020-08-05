import React, { Component } from 'react'

class App extends Component {
  state = {
    user: {
      Nombre: 'Tania Forero',
      Ciudad: 'Colombia',
      twitter: '@....',
      Youtube: 'brillyth.forero'
    }
  }

  render () {
    const { user } = this.state
    const keys = Object.keys(user)
    // => [ 'name', 'country', 'twitter' ]

    return (
      <div>
        <h3>Iterando propiedades de objetos <span role="img" aria-label="start">⭐️</span> </h3>
        <ul>
          {keys.map(key => (
            <li>
              <strong>{ key }:</strong> { user[key] }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App