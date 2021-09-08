import ItemMenu from '../components/ItemMenu'

export default function Menu(props) {
    return (
        <div className="bg-gray-800 p-4 my-1">
            {props.children}
        </div>
    )
}