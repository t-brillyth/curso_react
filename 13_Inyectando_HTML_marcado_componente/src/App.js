import React, { Component } from 'react'

class App extends Component{
  state = {
    marcado: `
      <h1> Inyectando HTML </h1>
      <br/>
      <hr/>
      <a href="#"> Enlace de ejemplo </a>
    `
  }

  render () {
    return(
      <div dangerouslySetInnerHTML={{
        __html: this.state.marcado
      }}>
        
      </div>
    ) 
  }
}

export default App
