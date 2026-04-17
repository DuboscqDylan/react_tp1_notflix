import { useState, useEffect, useRef } from "react";
import { BsEye, BsEyeSlash, BsPencil, BsTrash } from "react-icons/bs";
import { EditItemForm } from "../editItemForm/EditItemForm";
import styles from "./CardItem.module.css";

export const CardItem = ({ item, onDelete, onToggleWatched, onEdit }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(prev => !prev);
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    onToggleWatched(item.id);
    setMenuOpen(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(item.id);
    setMenuOpen(false);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsEditing(true);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const ToggleIcon = item.watched ? BsEyeSlash : BsEye;
  const toggleText = item.watched ? "Marcar como no visto" : "Marcar como visto";

  return (

    <>
      {
        isEditing && (
          <EditItemForm
            item={item}
            onClose={() => setIsEditing(false)}
            onSave={(updatedItem) => {
              onEdit(updatedItem);
            }}
          />
        )
      }

      <div className={styles.card} ref={menuRef}>
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
        >
          ⋯
        </button>

        {menuOpen && (
          <div className={styles.dropdownMenu}>
            <button className={styles.dropdownItem} onClick={handleToggle}>
              <ToggleIcon className={styles.icon} /> {toggleText}
            </button>
            <button className={styles.dropdownItem} onClick={handleEdit}>
              <BsPencil className={styles.icon} /> Editar
            </button>
            <button
              className={`${styles.dropdownItem} ${styles.deleteItem}`}
              onClick={handleDelete}
            >
              <BsTrash className={styles.icon} /> Borrar
            </button>
          </div>
        )}
      </div>
    </>);
};