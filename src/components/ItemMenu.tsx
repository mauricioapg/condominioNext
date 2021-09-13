import Botao from './Botao'

interface PropsItemMenu {
    className: String
    texto: String
    icone?: any
    onClick: any
}

export default function ItemMenu(props: PropsItemMenu) {
    return (
        <div className={`${props.className}`}>
            <Botao className={`${props.className}`}
                onClick={() => { props.onClick }}>
                {props.icone}
                {props.texto}
            </Botao>
        </div>
    )
}