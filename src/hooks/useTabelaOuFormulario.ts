import { useState } from "react";

export default function UseTabelaOuFormulario(){

    const [visivel, setVisivel] = useState<'tabela'| 'formulario' | 'inicio'>('formulario')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('formulario')
    const exibirInicio = () => setVisivel('inicio')

    return{
        formularioVisivel: visivel === 'formulario',
        tabelaVisivel: visivel === 'tabela',
        inicioVisivel: visivel === 'inicio',
        exibirTabela,
        exibirFormulario,
        exibirInicio
    }
}