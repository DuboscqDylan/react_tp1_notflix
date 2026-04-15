import styles from "./Filters.module.css";

export const Filters = ({ filters, setFilters, genreCounts }) => {

    const handleChange = (e) => {
        const { name, value } = e.target; console.log(name, value);
        setFilters(prev => ({
            ...prev, [name]: value
        }));
    };



    return (
        <div className={styles.bar}>

            <input type="text" name="search" placeholder="Buscar por título o director" value={filters.search} onChange={handleChange} />

            <select name="type" value={filters.type || "all"} onChange={handleChange}>
                <option value="all">Todo</option>
                <option value="movie">Peliculas</option>
                <option value="series">Series</option>
            </select>

            <select name="genre" value={filters.genre || "all"} onChange={handleChange}>
                <option value="all">Todo</option>
                {Object.entries(genreCounts).map(([genre, count]) => (
                    <option key={genre} value={genre.toLowerCase()}>
                        {genre} ({count})
                    </option>
                ))}
            </select>

            <select name="sortBy" value={filters.sortBy || ""} onChange={handleChange}>
                <option value="">Sin ordenar</option>
                <option value="year">Año</option>
                <option value="rating">Rating</option>
            </select>

            <select name="order" value={filters.order} onChange={handleChange}>
                <option value="ascendant">Ascendente</option>
                <option value="descendant">Descendente</option>
            </select>
        </div>
    )
}