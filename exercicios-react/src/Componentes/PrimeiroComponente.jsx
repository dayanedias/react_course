import React from 'react'

let isTrue = true

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{2 + 2}</h2>
        <p>É verdadeiro? {isTrue ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>

//export default () => 
//    <div>
//        <h1>Primeiro Componente (Arrow) </h1>
//    </div>

//export default function () {
//    return <h1>Primeiro Componente!</h1>
//}

//function primeiro () {
//    return <h1>Primeiro Componente!</h1>
//}
//
//export default primeiro