import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Formulario from '../components/Fomulario'
import PaginaInicial from '../components/PaginaInicial'
import Morador from '../core/Morador'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import Botao from '../components/Botao'
import useMoradores from '../hooks/useMoradores'

export default function Inicio() {

    //Toda a lógica implementada no hooks useClientes está sendo importada aqui
    const {
        tabelaVisivel,
        formularioVisivel,
        inicioVisivel,
        morador,
        moradores,
        exibirTabela,
        exibirInicio,
        adicionarMorador,
        selecionarMorador,
        salvarMorador,
        excluirMorador,
    } = useMoradores()

    useEffect(() => {
        const {pathname} = Router
        if(pathname == '/' ){
            Router.push('/inicio')
        }
      });

    return (
        <div className={"flex flex-col"}>
            <Layout titulo={"Página Inicial"}>
                {
                    tabelaVisivel ?
                        (
                            <>
                                <div className={"flex justify-start mb-2"}>
                                    <Botao className={`bg-gradient-to-tr from-green-800 to-green-600
            rounded-lg py-2 px-4 text-white ml-2`}
                                        onClick={adicionarMorador}>
                                        Novo Morador
                                    </Botao>
                                </div>
                                <Tabela
                                    moradores={moradores}
                                    moradorSelecionado={selecionarMorador}
                                    moradorExcluido={excluirMorador}
                                    alturaLinha={"h-10"} />
                            </>
                        ) :
                        formularioVisivel ?
                            (
                                <>
                                    <Formulario
                                        morador={morador}
                                        moradorMudou={salvarMorador}
                                        cancelar={exibirTabela} />
                                </>
                            ) :
                            inicioVisivel ?
                                (
                                    <PaginaInicial className={"text-gray-800"} />
                                ) : false
                }
            </Layout>
        </div>
    )
}