interface PropsBotao {
    children: any
    className: String
    onClick: any
    texto?: String
    espaco?: any
}

export default function Botao(props: PropsBotao) {
    return (
        <button className={`${props.className}`}
            onClick={props.onClick}>
                {props.espaco}
                {props.children}
        </button>
    )
}