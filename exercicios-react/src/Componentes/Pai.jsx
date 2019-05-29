import React from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import Filho from './Filho'

export default props => {
    // let lugarInformado = 'Nenhum'
    const notificarSaidaDoFilho = lugar => alert(`Liberado para ${lugar}`)
    return (
        <div>
            {/* {lugarInformado} */}
            <Filho notificarSaida = {notificarSaidaDoFilho} />
        </div>
    )
}