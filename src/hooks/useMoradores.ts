import { useEffect, useState } from "react"
import ColecaoMorador from "../backend/db/ColecaoMoradores"
import Morador from "../core/Morador"
import MoradorRepositorio from "../core/MoradorRepositorio"
import UseTabelaOuFormulario from "./useTabelaOuFormulario"

export default function useMoradores(){
  
  const repositorio: MoradorRepositorio = new ColecaoMorador()

  //Toda a lógica implementada no hooks useTabelaOuFormulario está sendo importada aqui
  const { 
    tabelaVisivel,
    formularioVisivel,
    inicioVisivel,
    exibirFormulario,
    exibirTabela,
    exibirInicio
   } = UseTabelaOuFormulario()

  const [moradores, setMoradores] = useState<Morador[]>([])
  const [morador, setMorador] = useState<Morador>(Morador.Vazio)

  useEffect(obterTodos, []) //obtém tudo na inicialização da página (use effect)

  function obterTodos(){
    repositorio.obterTodos().then(moradores => {
      setMoradores(moradores)
      exibirTabela()
    })
  }

  function adicionarMorador() {
    setMorador(Morador.Vazio)
    exibirFormulario()
  }

  function selecionarMorador(morador: Morador) {
    setMorador(morador)
    exibirFormulario()
  }

  async function excluirMorador(morador: Morador) {
    await repositorio.excluir(morador)
    obterTodos()
  }

  async function salvarMorador(morador: Morador) {
    await repositorio.salvar(morador)
    obterTodos()
  }

  return{
      morador,
      moradores,
      tabelaVisivel,
      formularioVisivel,
      inicioVisivel,
      exibirTabela,
      exibirFormulario,
      exibirInicio,
      adicionarMorador,
      salvarMorador,
      excluirMorador,
      selecionarMorador,
      obterTodos
  }
}