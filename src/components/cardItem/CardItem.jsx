import { useState } from "react";
import { BsEye, BsEyeSlash, BsPencil, BsTrash } from "react-icons/bs"; // 1. Import icons
import styles from "./CardItem.module.css";

export const CardItem = ({ item }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const ToggleIcon = item.watched ? BsEyeSlash : BsEye;
  const toggleText = item.watched ? "Marcar como no visto" : "Marcar como visto";

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <img src={item.image} alt={item.title} className={styles.image} />
        <div className={styles.overlay}>
          <h3>{item.title}</h3>
          <p>{item.director} • {item.year} • {item.genre}</p>
          <p>⭐ {item.rating}</p>
        </div>
      </div>

      <button
        className={styles.optionsButton}
        onClick={toggleMenu}
        aria-label="Options"
        title="Options"
      >
        ⋯
      </button>

      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <button className={styles.dropdownItem}>
            <ToggleIcon className={styles.icon} /> {toggleText}
          </button>
          <button className={styles.dropdownItem}>
            <BsPencil className={styles.icon} /> Editar
          </button>
          <button className={`${styles.dropdownItem} ${styles.deleteItem}`}>
            <BsTrash className={styles.icon} /> Borrar
          </button>
        </div>
      )}
    </div>
  );
};