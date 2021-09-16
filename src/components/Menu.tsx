import { useState } from 'react'
import ItemMenu from '../components/ItemMenu'
import useMoradores from '../hooks/useMoradores'
import UseTabelaOuFormulario from '../hooks/useTabelaOuFormulario'
import { IconeAdicionar, IconeLista } from './Icones'

interface PropsMenu {
    children: any
    className: String
}

export default function Menu(props: PropsMenu) {

    const { exibirTabela, exibirInicio } = UseTabelaOuFormulario()

    return (
        <div className={`${props.className}`}>
            <ItemMenu className={`hover:bg-gray-600 py-3
            flex justify-start ml-1`}
                texto="Início"
                icone={IconeLista}
                onClick={() => console.log('item de menu início')} />
            <ItemMenu className={`hover:bg-gray-600 py-3
            flex justify-start ml-1`}
                texto="Lista de Moradores"
                icone={IconeLista}
                onClick={console.log('item de menu lista')} />
        </div>
    )
}