import React from 'react'
import {filhosComProps} from '../utils/utils'

export default props =>
    <div>
        {filhosComProps (props)}
        {/* <h1> Família </h1>
        {React.Children.map(props.children,filho => {
            return React.cloneElement(filho, { ...props })
        })} */}
        {/* {React.cloneElement(props.children, { ...props}) } */}
        {/* {React.cloneElement(props.children, props) } */}
        {/* {React.cloneElement(props.children,
        {sobrenome : props.sobrenome})} */}
        {/* {props.children} */}
    </div>