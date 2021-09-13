import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Formulario from '../components/Fomulario'
import PaginaInicial from '../components/PaginaInicial'
import Morador from '../core/Morador'
import { useState } from 'react'

export default function Inicio() {

    const [morador, setMorador] = useState<Morador>(Morador.Vazio)
    const [visivel, setVisivel] = useState<'tabela' | 'formulario' | 'inicio'>('inicio') //exibe a tabela ou o form
    const [titulo, setTitulo] = useState("")

    const arrayMoradores = [
        new Morador('Mauricio', 'Casado(a)', '1'),
        new Morador('Lindsay', 'Casado(a)', '2'),
        new Morador('Mônica', 'Casado(a)', '3'),
        new Morador('Marcelo', 'Casado(a)', '4')
    ]

    function moradorSelecionado(morador: Morador) {
        setTitulo("teste")
        setMorador(morador)
        console.log(`${morador.nome} foi selecionado...`)
        //setVisivel('formulario')
    }

    function moradorExcluido(morador: Morador) {
        console.log(`Excluir... ${morador.nome}`)
    }

    return (
        <div className={"flex flex-col"}>
            <Layout titulo={"Página Inicial"}>
                {
                    visivel === 'tabela' ?
                        (
                            <>
                                <Tabela
                                    moradores={arrayMoradores}
                                    moradorSelecionado={moradorSelecionado}
                                    moradorExcluido={moradorExcluido}
                                    alturaLinha={"h-10"} />
                            </>
                        ) :
                        visivel === 'formulario' ?
                            (
                                <>
                                    <Formulario
                                        morador={morador} />
                                </>
                            ) :
                            <PaginaInicial className={"text-gray-800"}/>
                }
            </Layout>
        </div>
    )
}