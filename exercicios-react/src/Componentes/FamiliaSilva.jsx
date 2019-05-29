import React from 'react'
import Membro from './Membro'

export default props =>
    <div>
        <Membro nome = "Dayane" sobrenome = {props.sobrenome}/>
        <Membro nome = "João" sobrenome = {props.sobrenome}/>
        <Membro nome = "Sandra" sobrenome = {props.sobrenome}/>
        <Membro nome = "José" sobrenome = {props.sobrenome}/>
        <Membro nome = "Kittynelson" sobrenome = {props.sobrenome}/>
    </div>
