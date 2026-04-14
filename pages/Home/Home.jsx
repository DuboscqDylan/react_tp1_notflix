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
    },
    {
        id: 11,
        title: "Blade Runner 2049",
        director: "Denis Villeneuve",
        year: 2017,
        genre: "Sci-fi",
        rating: 8.0,
        type: "movie",
        watched: true
    },
    {
        id: 12,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Drama",
        rating: 9.0,
        type: "movie",
        watched: true
    },
    {
        id: 13,
        title: "Severance",
        director: "Ben Stiller",
        year: 2022,
        genre: "Sci-fi",
        rating: 8.7,
        type: "series",
        watched: false
    },
    {
        id: 14,
        title: "Joker",
        director: "Todd Phillips",
        year: 2019,
        genre: "Drama",
        rating: 8.4,
        type: "movie",
        watched: true
    },
    {
        id: 15,
        title: "The Prestige",
        director: "Christopher Nolan",
        year: 2006,
        genre: "Drama",
        rating: 8.5,
        type: "movie",
        watched: false
    },
    {
        id: 16,
        title: "Black Mirror",
        director: "Charlie Brooker",
        year: 2011,
        genre: "Sci-fi",
        rating: 8.8,
        type: "series",
        watched: true
    },
    {
        id: 17,
        title: "Fight Club",
        director: "David Fincher",
        year: 1999,
        genre: "Drama",
        rating: 8.8,
        type: "movie",
        watched: true
    },
    {
        id: 18,
        title: "Mindhunter",
        director: "David Fincher",
        year: 2017,
        genre: "Thriller",
        rating: 8.6,
        type: "series",
        watched: false
    },
    {
        id: 19,
        title: "The Big Lebowski",
        director: "Coen Brothers",
        year: 1998,
        genre: "Comedy",
        rating: 8.1,
        type: "movie",
        watched: false
    },
    {
        id: 20,
        title: "True Detective",
        director: "Nic Pizzolatto",
        year: 2014,
        genre: "Thriller",
        rating: 8.9,
        type: "series",
        watched: true
    },
    {
        id: 21,
        title: "The Social Network",
        director: "David Fincher",
        year: 2010,
        genre: "Drama",
        rating: 7.7,
        type: "movie",
        watched: true
    },
    {
        id: 22,
        title: "Rick and Morty",
        director: "Justin Roiland",
        year: 2013,
        genre: "Comedy",
        rating: 9.1,
        type: "series",
        watched: false
    },
    {
        id: 23,
        title: "Shutter Island",
        director: "Martin Scorsese",
        year: 2010,
        genre: "Thriller",
        rating: 8.2,
        type: "movie",
        watched: true
    },
    {
        id: 24,
        title: "Dark",
        director: "Baran bo Odar",
        year: 2017,
        genre: "Sci-fi",
        rating: 8.8,
        type: "series",
        watched: false
    },
    {
        id: 25,
        title: "Superbad",
        director: "Greg Mottola",
        year: 2007,
        genre: "Comedy",
        rating: 7.6,
        type: "movie",
        watched: false
    }
]);

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

    const watchedList = filteredList.filter(item => item.watched);
    
    const unwatchedList = filteredList.filter(item => !item.watched);

    return (
        <div>
            <Title text="NOT-FLIX" />
            <Filters filters={filters} setFilters={setFilters}/>
            <h2>Vistas ({watchedList.length})</h2>
            <ListItems list={watchedList}/>
            <h2>Por ver ({unwatchedList.length})</h2>
            <ListItems list={unwatchedList}/>
        </div>
    )
}