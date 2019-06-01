import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './Componentes/PrimeiroComponente'
// import A, { CompB as B} from './Componentes/DoisComponentes'
// import MultiElementos from './Componentes/MultiElementos'
// import FamiliaSilva from './Componentes/FamiliaSilva'
// import Familia from './Componentes/Familia'
// import Membro from './Componentes/Membro'
// import ComponenteComFuncao from './Componentes/ComponenteComFuncao'
// import Pai from './Componentes/Pai'
// import ComponenteClasse from './Componentes/ComponenteClasse'
import Contador from './Componentes/Contador'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Contador numeroInicial = {100} />
        {/* <ComponenteClasse valor = 'Teste de classe'/> */}
        {/* <Pai /> */}
        {/* < ComponenteComFuncao /> */}
        {/* <Familia sobrenome = "Teste"> 
            <Membro nome = "João" /> 
            <Membro nome = "Joaquina" /> 
        </Familia> */}
        {/* <Familia> 
            <Membro nome = "André" sobrenome = "Dias" /> 
            <Membro nome = "Dayane" sobrenome = "Dias" /> 
        </Familia> */}
        {/* <FamiliaSilva sobrenome = 'Silva' /> */}
        {/* { <MultiElementos / > } */}
        {/* < A valor = "Primeiro Teste" />
        <B valor = "Segundo Teste" />  */}
        {/* {<PrimeiroComponente valor="Bom dia!" valor2={982} />} */}
    </div>
, elemento)


//const jsx = <h1>Olá React</h1>
//ReactDOM.render(jsx , elemento)

//const jsx = <h1>Olá React</h1>
//ReactDOM.render(jsx , elemento)