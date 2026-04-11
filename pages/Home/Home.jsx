import { useState } from "react";
import { Title } from "../../components/title/title";

export const Home = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            titulo: "Interstellar",
            director: "Christopher Nolan",
            anio: 2014,
            genero: "Sci-fi",
            rating: 8.7,
            tipo: "pelicula",
            vista: true
        },
        {
            id: 2,
            titulo: "Lalaland",
            director: "Damien Chazelle",
            anio: 2016,
            genero: "Drama",
            rating: 8.0,
            tipo: "pelicula",
            vista: true
        },
        {
            id: 3,
            titulo: "Pluribus",
            director: "Vince Gilligan",
            anio: 2025,
            genero: "Sci-fi",
            rating: 8.0,
            tipo: "serie",
            vista: false
        },
    {
        id: 4,
        titulo: "Inception",
        director: "Christopher Nolan",
        anio: 2010,
        genero: "Sci-fi",
        rating: 8.8,
        tipo: "pelicula",
        vista: true
    },
    {
        id: 5,
        titulo: "Breaking Bad",
        director: "Vince Gilligan",
        anio: 2008,
        genero: "Drama",
        rating: 9.5,
        tipo: "serie",
        vista: true
    },
    {
        id: 6,
        titulo: "The Matrix",
        director: "Lana Wachowski",
        anio: 1999,
        genero: "Sci-fi",
        rating: 8.7,
        tipo: "pelicula",
        vista: true
    },
    {
        id: 7,
        titulo: "The Office",
        director: "Greg Daniels",
        anio: 2005,
        genero: "Comedia",
        rating: 8.9,
        tipo: "serie",
        vista: false
    },
    {
        id: 8,
        titulo: "Parasite",
        director: "Bong Joon-ho",
        anio: 2019,
        genero: "Thriller",
        rating: 8.6,
        tipo: "pelicula",
        vista: true
    },
    {
        id: 9,
        titulo: "Stranger Things",
        director: "Hermanos Duffer",
        anio: 2016,
        genero: "Sci-fi",
        rating: 8.7,
        tipo: "serie",
        vista: false
    },
    {
        id: 10,
        titulo: "Whiplash",
        director: "Damien Chazelle",
        anio: 2014,
        genero: "Drama",
        rating: 8.5,
        tipo: "pelicula",
        vista: true
    }
    ])


    return (
        <div>
            <Title texto="Not-flix" />

            {items.map((item) => (
                <div key={item.id}>
                    <h2>{item.titulo}</h2>
                    <p>Director: {item.director}</p>
                    <p>Año: {item.anio}</p>
                    <p>Género: {item.genero}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Tipo: {item.tipo}</p>
                    <p>{item.vista ? "Vista" : "Sin ver"}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}
