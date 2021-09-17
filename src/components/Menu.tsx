import { useState } from 'react'
import useMoradores from '../hooks/useMoradores'
import UseTabelaOuFormulario from '../hooks/useTabelaOuFormulario'
import { IconeInicio, IconeLista } from './Icones'
import ItemMenu from './ItemMenu'

interface PropsMenu {
    children: any
    className: String
}

export default function Menu(props: PropsMenu) {

    return (
        <div className={`${props.className}`}>
            <ItemMenu className={`hover:bg-gray-600 py-3
            flex justify-start ml-2`}
                texto="Início"
                icone={IconeInicio}
                destino={'inicio'} />
            <ItemMenu className={`hover:bg-gray-600 py-3
            flex justify-start ml-2`}
                texto="Lista de Moradores"
                icone={IconeLista}
                destino={'moradores'} />
        </div>
    )
}