import { useState } from "react";
import styles from "./formItem.module.css";

export const FormItem = ({ onAddItem }) => {
  const [form, setForm] = useState({
    title: "",
    director: "",
    year: "",
    genre: "Drama",
    rating: "",
    type: "movie",
    watched: false,
    image: ""
  });

  const [imageMethod, setImageMethod] = useState("url");
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setForm(prev => ({ ...prev, image: url }));
    setImagePreview(url);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // No lo podía hacer con CreateObjectURL, se perdía al recargar la página.
    // Tuve que preguntarle a la IA y me sugirió utilizar una conversión a base64, lo cual me funcionó
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setForm(prev => ({ ...prev, image: base64 }));
      setImagePreview(base64);
    };
    reader.readAsDataURL(file);
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

    setForm({
      title: "",
      director: "",
      year: "",
      genre: "Drama",
      rating: "",
      type: "movie",
      watched: false,
      image: ""
    });
    setImagePreview("");
    setImageMethod("url");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Agregar Película / Serie</h3>

      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        className={styles.input}
        type="text"
        name="director"
        placeholder="Director"
        value={form.director}
        onChange={handleChange}
        required
      />

      <input
        className={styles.input}
        type="number"
        name="year"
        placeholder="Año"
        value={form.year}
        onChange={handleChange}
        required
      />

      <input
        className={styles.input}
        type="number"
        step="0.1"
        name="rating"
        placeholder="Rating"
        value={form.rating}
        onChange={handleChange}
        required
      />

      <select
        className={styles.select}
        name="genre"
        value={form.genre}
        onChange={handleChange}
      >
        <option>Drama</option>
        <option>Comedia</option>
        <option>Acción</option>
        <option>Thriller</option>
        <option>Sci-fi</option>
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
            value={true}
            checked={form.watched === true}
            onChange={() => setForm(prev => ({ ...prev, watched: true }))}
          />
          Vista
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="watched"
            value={false}
            checked={form.watched === false}
            onChange={() => setForm(prev => ({ ...prev, watched: false }))}
          />
          No vista
        </label>
      </div>

      {/* Image input section */}
      <div className={styles.imageSection}>
        <label className={styles.label}>Imagen (póster)</label>

        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="imageMethod"
              value="url"
              checked={imageMethod === "url"}
              onChange={() => setImageMethod("url")}
            />
            URL
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="imageMethod"
              value="file"
              checked={imageMethod === "file"}
              onChange={() => setImageMethod("file")}
            />
            Subir archivo
          </label>
        </div>

        {imageMethod === "url" ? (
          <input
            className={styles.input}
            type="url"
            name="image"
            placeholder="https://... (URL del póster)"
            value={form.image}
            onChange={handleImageUrlChange}
          />
        ) : (
          <input
            className={styles.input}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        )}

        {imagePreview && (
          <div className={styles.preview}>
            <img src={imagePreview} alt="Preview" width="100" />
          </div>
        )}
      </div>

      <button className={styles.button} type="submit">
        Agregar
      </button>
    </form>
  );
};