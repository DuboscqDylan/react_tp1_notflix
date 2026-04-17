import {useState} from "react";
import styles from "./formItem.module.css";

export const FormItem = ({onAddItem}) => {
    const [form,setform] = useState({
        title: "",
        director: "",
        year: "",
        genre: "",
        rating: "",
        type: "",
        watched: false,
    });

    //se ejecua cada vez que escribis o cambias algo
    const handleChange = (e) => {
        const { name,value,type,checked } = e.target;

        setform({
            ...form,
            [name]: type === "checkbox" ? checked : value, //actualiza solo el campo que cambio
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newItem = {
            id: Date.now(),
            ...form,
            year: Number(form.year),
            rating: Number(form.rating),
        };

        onAddItem(newItem);

        //reset
        setForm({
            title: "",
            director: "",
            year: "",
            rating: "",
            genre: "Drama",
            type: "pelicula",
            watched: false,
        });
    };

    return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Agregar Película / Serie</h3>

      <input className={styles.input}
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input className={styles.input}
        type="text"
        name="director"
        placeholder="Director"
        value={form.director}
        onChange={handleChange}
        required
      />

      <input className={styles.input}
        type="number"
        name="year"
        placeholder="Año"
        value={form.year}
        onChange={handleChange}
        required
      />

      <input className={styles.input}
        type="number"
        step="0.1"
        name="rating"
        placeholder="Rating"
        value={form.rating}
        onChange={handleChange}
        required
      />

      {/* SELECT GÉNERO */}
      <select className={styles.select} name="genre" value={form.genre} onChange={handleChange}>
        <option>Drama</option>
        <option>Comedia</option>
        <option>Acción</option>
        <option>Thriller</option>
        <option>Sci-fi</option>
      </select>

      {/* RADIO TIPO */}
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
            checked={form.watched === "true"}
            onChange={handleChange}
           />
        Vista
        </label>

       <label className={styles.radioLabel}>
          <input
            type="radio"
            name="watched"
            value="false"
            checked={form.watched === "false"}
            onChange={handleChange}
           />
        No vista
        </label>
    </div>
      <button className={styles.button} type="submit">
            Agregar
      </button>
    </form>
  );

};