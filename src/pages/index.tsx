import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import { useEffect, useState } from 'react'
import ColecaoMorador from '../backend/db/ColecaoMoradores'
import MoradorRepositorio from '../core/MoradorRepositorio'
import useMoradores from '../hooks/useMoradores'
import Paths from '../core/path'
import Router from 'next/router'

export default function Home() {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [destino, setDestino] = useState('')

  const arrayAdmin = [
    {
      nomeUsuario: 'admin',
      senhaUsuario: 'admin'
    },
    {
      nomeUsuario: 'mauricio',
      senhaUsuario: 'm123'
    },
    {
      nomeUsuario: 'lindsay',
      senhaUsuario: 'l123'
    }
  ]

  const objUsuario =
  {
    nomeUsuario: 'admin',
    senhaUsuario: 'admin'
  }

  // function verificarUsuario() {
  //   let retorno = false
  //   arrayAdmin.map(user => {
  //     if (user.nomeUsuario === usuario && user.senhaUsuario === senha) {
  //       retorno = true
  //     }
  //     else {
  //       retorno = false
  //     }
  //   })
  //   return retorno
  // }

  function verificarUsuario() {
    let retorno = false
    if (objUsuario.nomeUsuario === usuario && objUsuario.senhaUsuario === senha) {
      retorno = true
    }
    else {
      retorno = false
    }
    return retorno
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    `}>
      <div className={`
      h-10vh bg-gray-600 py-8 px-32 rounded-3xl border-8 border-gray-400
      `}>
        <table>
          <tr>
            <td className={"py-8"}>
              <input className="rounded-md h-10" type="text"
                onChange={e => setUsuario(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <input className="rounded-md h-10" type="password"
                onChange={e => setSenha(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td className={`p-2 my-6 w-full rounded-md bg-gray-800 text-white
            flex flex-row justify-center`}>
              <Link href={destino}>
                <a onClickCapture={() => 
                verificarUsuario()
                  ? setDestino('inicio')
                  : alert('Usuário e/ou senha inválidos!')
                }>Login</a>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
