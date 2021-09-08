import Link from 'next/Link'

export default function Botao(props) {
    return (
        <div>
            <button className={props.estilo}
                onClick={props.acao}>
                <span>{props.texto}</span>
            </button>
        </div>
    )
}