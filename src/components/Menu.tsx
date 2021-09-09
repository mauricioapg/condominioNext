import ItemMenu from '../components/ItemMenu'

export default function Menu(props) {
    return (
        <div className={props.estilo}>
            {props.children}
        </div>
    )
}