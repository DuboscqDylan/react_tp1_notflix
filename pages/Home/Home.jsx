import { useState } from "react";
import { Title } from "../../components/title/Title";
import { ListItems } from "../../components/listItems/ListItems";

export const Home = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            title: "Interstellar",
            director: "Christopher Nolan",
            year: 2014,
            genre: "Sci-fi",
            rating: 8.7,
            type: "pelicula",
            watched: true
        },
        {
            id: 2,
            title: "Lalaland",
            director: "Damien Chazelle",
            year: 2016,
            genre: "Drama",
            rating: 8.0,
            type: "pelicula",
            watched: true
        },
        {
            id: 3,
            title: "Pluribus",
            director: "Vince Gilligan",
            year: 2025,
            genre: "Sci-fi",
            rating: 8.0,
            type: "serie",
            watched: false
        },
    {
        id: 4,
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Sci-fi",
        rating: 8.8,
        type: "pelicula",
        watched: true
    },
    {
        id: 5,
        title: "Breaking Bad",
        director: "Vince Gilligan",
        year: 2008,
        genre: "Drama",
        rating: 9.5,
        type: "serie",
        watched: true
    },
    {
        id: 6,
        title: "The Matrix",
        director: "Lana Wachowski",
        year: 1999,
        genre: "Sci-fi",
        rating: 8.7,
        type: "pelicula",
        watched: true
    },
    {
        id: 7,
        title: "The Office",
        director: "Greg Daniels",
        year: 2005,
        genre: "Comedia",
        rating: 8.9,
        type: "serie",
        watched: false
    },
    {
        id: 8,
        title: "Parasite",
        director: "Bong Joon-ho",
        year: 2019,
        genre: "Thriller",
        rating: 8.6,
        type: "pelicula",
        watched: true
    },
    {
        id: 9,
        title: "Stranger Things",
        director: "Hermanos Duffer",
        year: 2016,
        genre: "Sci-fi",
        rating: 8.7,
        type: "serie",
        watched: false
    },
    {
        id: 10,
        title: "Whiplash",
        director: "Damien Chazelle",
        year: 2014,
        genre: "Drama",
        rating: 8.5,
        type: "pelicula",
        watched: true
    }
    ])


    return (
        <div>
            <Title text="Not-flix" />
            <ListItems list={items}/>
        </div>
    )
}