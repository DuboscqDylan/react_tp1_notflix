import styles from "./CardItem.module.css";

export const CardItem = ({ item }) => {
    return (
        <div className={styles.card}>
            <img 
                src={item.image} 
                alt={item.title} 
                className={styles.image}
            />
            <div className={styles.overlay}>
                <h3>{item.title}</h3>
                <p>{item.director} • {item.year} • {item.genre}</p>
                <p>⭐ {item.rating}</p>
            </div>
        </div>
    )
}