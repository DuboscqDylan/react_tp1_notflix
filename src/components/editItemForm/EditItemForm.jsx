import { useState } from "react";
import styles from "./EditItemForm.module.css";

export const EditItemForm = ({ item, onClose, onSave }) => {
    const [form, setForm] = useState({
        ...item,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: name === "watched" ? value === "true" : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...form,
            year: Number(form.year),
            rating: Number(form.rating),
        });
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Editar</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.input} name="title" value={form.title} onChange={handleChange} />
                    <input className={styles.input} name="director" value={form.director} onChange={handleChange} />
                    <input className={styles.input} name="year" value={form.year} onChange={handleChange} />
                    <input className={styles.input} name="rating" value={form.rating} onChange={handleChange} />

                    <select className={styles.select} name="genre" value={form.genre} onChange={handleChange}>
                        <option value="Drama">Drama</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Thriller">Thriller</option>
                    </select>

                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="type"
                                value="movie"
                                checked={form.type === "movie"}
                                onChange={handleChange}
                            />
                            Película
                        </label>

                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="type"
                                value="series"
                                checked={form.type === "series"}
                                onChange={handleChange}
                            />
                            Serie
                        </label>
                    </div>

                    <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="watched"
                                value="true"
                                checked={form.watched === true}
                                onChange={handleChange}
                            />
                            Vista
                        </label>

                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="watched"
                                value="false"
                                checked={form.watched === false}
                                onChange={handleChange}
                            />
                            No vista
                        </label>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.buttonPrimary} type="submit">Guardar</button>
                        <button className={styles.buttonSecondary} type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};