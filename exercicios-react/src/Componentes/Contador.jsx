import React, { Component } from 'react'

export default class Contador extends Component {
    constructor(props){
        super(props)
        this.maisUm = this.maisUm.bind(this)
    }

    maisUm() {
        this.props.numero++
    }

    render() {
        return(
            <div>
                <div>Número: {this.props.numero} </div>
                <button onClick = {this.maisUm}> Adiciona </button>
                <button> Remove </button>
            </div>
        )

    }

}

//Solução 01 (muitos códigos)

// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }