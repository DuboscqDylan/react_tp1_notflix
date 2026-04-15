import styles from "./CardItem.module.css";

export const CardItem = ({ item }) => {
    return (
        <div className={styles.card}>
            {Object.entries(item).map(([key, value]) => (
                <p key={key}>
                    {key}: {String(value)}
                </p>
            ))}
            <hr />
        </div>
    )
}