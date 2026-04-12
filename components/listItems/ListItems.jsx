import { CardItem } from "../cardItem/CardItem"

export const ListItems = ({ list }) => {
    return (
        <>
        <p>Items en la lista: {list.length === 0 ? "No hay elementos en la lista" : list.length}</p>
        <ol>
            {list.map((element) => (
                <li key={element.id}>
                    <CardItem item={element} />
                </li>
            ))}
        </ol>
        </>
    )
}