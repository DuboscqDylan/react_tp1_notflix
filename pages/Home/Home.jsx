import { useState } from "react";
import { Title } from "../../components/title/Title";
import { ListItems } from "../../components/listItems/ListItems";
import {Filters} from "../../components/filters/Filters";

export const Home = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            title: "Interstellar",
            director: "Christopher Nolan",
            year: 2014,
            genre: "Sci-fi",
            rating: 8.7,
            type: "movie",
            watched: true
        },
        {
            id: 2,
            title: "Lalaland",
            director: "Damien Chazelle",
            year: 2016,
            genre: "Drama",
            rating: 8.0,
            type: "movie",
            watched: true
        },
        {
            id: 3,
            title: "Pluribus",
            director: "Vince Gilligan",
            year: 2025,
            genre: "Sci-fi",
            rating: 8.0,
            type: "series",
            watched: false
        },
    {
        id: 4,
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Sci-fi",
        rating: 8.8,
        type: "movie",
        watched: true
    },
    {
        id: 5,
        title: "Breaking Bad",
        director: "Vince Gilligan",
        year: 2008,
        genre: "Drama",
        rating: 9.5,
        type: "series",
        watched: true
    },
    {
        id: 6,
        title: "The Matrix",
        director: "Lana Wachowski",
        year: 1999,
        genre: "Sci-fi",
        rating: 8.7,
        type: "movie",
        watched: true
    },
    {
        id: 7,
        title: "The Office",
        director: "Greg Daniels",
        year: 2005,
        genre: "Comedy",
        rating: 8.9,
        type: "series",
        watched: false
    },
    {
        id: 8,
        title: "Parasite",
        director: "Bong Joon-ho",
        year: 2019,
        genre: "Thriller",
        rating: 8.6,
        type: "movie",
        watched: true
    },
    {
        id: 9,
        title: "Stranger Things",
        director: "Hermanos Duffer",
        year: 2016,
        genre: "Sci-fi",
        rating: 8.7,
        type: "series",
        watched: false
    },
    {
        id: 10,
        title: "Whiplash",
        director: "Damien Chazelle",
        year: 2014,
        genre: "Drama",
        rating: 8.5,
        type: "movie",
        watched: true
    }
    ])
    const [filters, setFilters] = useState({
        search: "",
        type: "all",
        genre: "all",
        sortBy: null,
        order: "ascendant"
    })
    const filteredList = items.filter(item =>{
        const matchSearch = 
            item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            item.director.toLowerCase().includes(filters.search.toLowerCase());
        
        const matchType = filters.type === "all" || item.type === filters.type;

        const matchGenre = filters.genre === "all" || item.genre === filters.genre;

        return matchSearch && matchType && matchGenre;
    })
    .sort((a,b) => {
        if(!filters.sortBy) return 0;
        const modifier = filters.order === "ascendant" ? 1 : -1;
        return(a[filters.sortBy] - b[filters.sortBy]) * modifier;
    })

    return (
        <div>
            <Title text="NOT-FLIX" />
            <Filters filters={filters} setFilters={setFilters}/>
            <ListItems list={filteredList}/>
        </div>
    )
}