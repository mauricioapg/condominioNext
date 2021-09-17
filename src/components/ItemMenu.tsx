import Link from 'next/Link'
import { IconeLista } from './Icones'

interface PropsItem{
    className: String
    texto: String
    icone?: any 
    destino:  String
}

export default function ItemMenu(props: PropsItem) {
    return (
        <div className={`${props.className}`}>
            {props.icone}
            <Link href={`${props.destino}`}>
                {props.texto}
            </Link>
        </div>
    )
}