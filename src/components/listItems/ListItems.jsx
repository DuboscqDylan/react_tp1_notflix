import { CardItem } from "../cardItem/CardItem";
import styles from "./ListItems.module.css";

export const ListItems = ({ list }) => {
    return (
        <>
        <p>{list.length === 0 ? "No hay elementos en la lista" : ""}</p>
        <ol className={styles.list}>
            {list.map((element) => (
                <li key={element.id}>
                    <CardItem item={element} />
                </li>
            ))}
        </ol>
        </>
    )
}