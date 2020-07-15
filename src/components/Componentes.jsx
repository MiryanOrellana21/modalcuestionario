import React, { Component } from 'react'

export default class Componentes extends Component {
  componentDidMount(){
    window.addEventListener("beforeunload", ev => {
      ev.preventDefault();
      localStorage.setItem('cerrar',ev)
      // if(ev.re)
      console.log(ev)
      return (ev.returnValue = "Hola mundo");
    });
    // window.onbeforeunload = this.preguntarAntesDeSalir()
  }
  // preguntarAntesDeSalir(){
  //   return('tas bien')
  // }
  render() {
    return (
      <div>
        los compoenntess
      </div>
    )
  }
}
