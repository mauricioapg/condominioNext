import Link from 'next/Link'
import Menu from './Menu'

interface PropsLayout{
    children: any
    titulo: String
}

export default function Layout(props: PropsLayout) {
    return (
        <div className={`
            flex flex-col w-full h-16
            bg-gray-800 text-white
        `}>
            <div className={`flex flex-row justify-between mx-6 mt-3`}>
                <img className={"h-12"}
                    src="https://engelux.com.br/img/enterprises/0019/logomarca-stamp.png" alt="logo" />
                <h1 className={"font-bold text-2xl my-1 mx-10"}>{props.titulo}</h1>
                <div className={"text-2xl bg-gray-600 rounded-xl px-6 my-2 justify-center"}>
                    <Link href={'/'}>Sair</Link>
                </div>
            </div>
            <div className="flex">
                <Menu className={`bg-gray-800 mt-1 w-2/12`}>
                </Menu>
                <div className="flex flex-col ml-3 mr-4 mt-3 w-full">
                    {props.children}
                </div>
            </div>
        </div>
    )
}