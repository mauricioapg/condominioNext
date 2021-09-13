import { useState } from 'react'
import ItemMenu from '../components/ItemMenu'
import { IconeAdicionar, IconeLista } from './Icones'

interface PropsMenu {
    children: any
    className: String
    paginaAtual?: any
}

export default function Menu(props: PropsMenu) {

    const [PaginaAtual, setPaginaAtual] = useState<'inicio' | 'formulario' | 'tabela'>('inicio')

    return (
        <div className={`${props.className}`}>
            <ItemMenu className={`hover:bg-gray-900 py-3
            flex flex-row justify-evenly`}
                texto="Cadastrar Morador"
                icone={IconeAdicionar}
                onClick={() => setPaginaAtual('formulario')} />
            <ItemMenu className={`hover:bg-gray-900 py-3
            flex flex-row justify-evenly`}
                texto="Lista de Moradores"
                icone={IconeLista}
                onClick={() => setPaginaAtual('tabela')} />
        </div>
    )
}