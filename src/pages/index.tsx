import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={`
    flex justify-center items-center h-screen
    `}>
      <div className={`
      h-10vh bg-gray-400 py-8 px-32 rounded-3xl border-8 border-gray-200
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
              <button className={"p-2 my-6 w-full rounded-md bg-red-500"}>Login</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
