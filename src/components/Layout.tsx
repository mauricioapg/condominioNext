import Link from 'next/Link'
import Menu from './Menu'
import ItemMenu from './ItemMenu'

export default function Layout(props) {
    return (
        <div className={`
            flex flex-col w-full h-16
            bg-gray-800 text-white
        `}>
            <div className={"flex flex-row my-3 mx-10"}>
                <img className={"h-12"}
                    src="https://engelux.com.br/img/enterprises/0019/logomarca-stamp.png" alt="logo" />
                <h1 className={"font-bold text-2xl my-1 mx-10"}>{props.titulo}</h1>
                <div className={"text-2xl h-10 p-1 bg-gray-600 rounded-xl"}>
                    <Link href={'/'}>Sair</Link>
                </div>
            </div>
            <div className="flex">
                <div>
                    <Menu>
                        <ItemMenu destino="/" texto="Cadastrar Morador"></ItemMenu>
                        <ItemMenu destino="/" texto="Lista de Moradores"></ItemMenu>
                    </Menu>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}