import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }
    

    maisUm = () => {
        
        this.alterarNumero(1)
        // this.setState( {numero: this.state.numero + 1 })
        // this.props.numero = this.state.numero + 1
        // console.log(this)
    }

    menosUm = () => {
        
        this.setState( {numero: this.state.numero - 1 })
    }

    alterarNumero(dif) {
        this.setState( { numero: this.state.numero + dif})
    }

    render() {
        return(
            <div>
                <div>Número: {this.state.numero} </div>
                <button onClick= {this.maisUm}> Adiciona </button>
                <button onClick={this.menosUm}> Remove </button>
                <button onClick= {() => this.alterarNumero(10)}> Adiciona 10 </button>
                <button onClick={() => this.alterarNumero(-10)}> Remove 10 </button>
            </div>
        )

    }

}

//Solução 01 - Bind

// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }


// SOlução 02 - Função Arrow onClick
// <button onClick = {() => this.maisUm()}> Adiciona </button>


//Solução 03 - Função Arrow
// maisUm = () => {
//     // this.props.numero++
//     console.log(this)
// }