import Head from 'next/head'
import Image from 'next/image'
import Botao from '../components/Botao'
import Link from 'next/Link'

export default function Home() {
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
              <input className="rounded-md h-10" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <input className="rounded-md h-10" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              {/* <Botao estilo={"p-2 my-6 w-full rounded-md bg-gray-800 text-white"}>               
              </Botao> */}
              <button className={"p-2 my-6 w-full rounded-md bg-gray-800 text-white"}>
                Login
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
