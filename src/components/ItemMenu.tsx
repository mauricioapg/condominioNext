export default function ItemMenu(props) {
    return (
        <div className={"text-center hover:bg-gray-900"}>
            <a href={props.destino}>
                {props.texto}
            </a>
        </div>
    )
}