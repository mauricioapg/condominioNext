export default function ItemMenu(props) {
    return (
        <div className="m-0 p-4 hover:bg-gray-900">
                <a href={props.destino}>
                    {props.texto}
                </a>
        </div>
    )
}