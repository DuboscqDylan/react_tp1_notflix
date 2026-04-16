import { useState } from "react";
import { Title } from "../../components/title/Title";
import { ListItems } from "../../components/listItems/ListItems";
import { Filters } from "../../components/filters/Filters";
import { FormItem } from "../../components/formItem/FormItem";

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
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/9cTfZWP5TfdnmAjiD6ZBXWIJ7O9.jpg"
        },
        {
            id: 2,
            title: "Lalaland",
            director: "Damien Chazelle",
            year: 2016,
            genre: "Drama",
            rating: 8.0,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/7pFsAaJmiOppVHcldBzg8JKBHwe.jpg"
        },
        {
            id: 3,
            title: "Pluribus",
            director: "Vince Gilligan",
            year: 2025,
            genre: "Sci-fi",
            rating: 8.0,
            type: "series",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/stkYbERuo2YYuay37rYaE41Izyu.jpg"
        },
        {
            id: 4,
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            genre: "Sci-fi",
            rating: 8.8,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg"
        },
        {
            id: 5,
            title: "Breaking Bad",
            director: "Vince Gilligan",
            year: 2008,
            genre: "Drama",
            rating: 9.5,
            type: "series",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
        },
        {
            id: 6,
            title: "The Matrix",
            director: "Lana Wachowski",
            year: 1999,
            genre: "Sci-fi",
            rating: 8.7,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/ejmTPNAkgZaVJ4AI9zb9SehAYU0.jpg"
        },
        {
            id: 7,
            title: "The Office",
            director: "Greg Daniels",
            year: 2005,
            genre: "Comedy",
            rating: 8.9,
            type: "series",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/5uwetbr0X8BPRy3Wmh63S9EhsiY.jpg"
        },
        {
            id: 8,
            title: "Parasite",
            director: "Bong Joon-ho",
            year: 2019,
            genre: "Thriller",
            rating: 8.6,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/4N55tgxDW0RRATyrZHbx0q9HUKv.jpg"
        },
        {
            id: 9,
            title: "Stranger Things",
            director: "Hermanos Duffer",
            year: 2016,
            genre: "Sci-fi",
            rating: 8.7,
            type: "series",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/1sRJ8D1vpXE5WQBGrUBky3uUwvX.jpg"
        },
        {
            id: 10,
            title: "Whiplash",
            director: "Damien Chazelle",
            year: 2014,
            genre: "Drama",
            rating: 8.5,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/uy36CPy5ARuC8qrH8Esg2ndFyJ5.jpg"
        },
        {
            id: 11,
            title: "Blade Runner 2049",
            director: "Denis Villeneuve",
            year: 2017,
            genre: "Sci-fi",
            rating: 8.0,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/cOt8SQwrxpoTv9Bc3kyce3etkZX.jpg"
        },
        {
            id: 12,
            title: "The Dark Knight",
            director: "Christopher Nolan",
            year: 2008,
            genre: "Drama",
            rating: 9.0,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg"
        },
        {
            id: 13,
            title: "Severance",
            director: "Ben Stiller",
            year: 2022,
            genre: "Sci-fi",
            rating: 8.7,
            type: "series",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/wrZjYKxObEaWZmjB7scQMYo40o8.jpg"
        },
        {
            id: 14,
            title: "Joker",
            director: "Todd Phillips",
            year: 2019,
            genre: "Drama",
            rating: 8.4,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/v0eQLbzT6sWelfApuYsEkYpzufl.jpg"
        },
        {
            id: 15,
            title: "The Prestige",
            director: "Christopher Nolan",
            year: 2006,
            genre: "Drama",
            rating: 8.5,
            type: "movie",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/lIl2CrnWohGrZSO9eyKRptxZ7Hs.jpg"
        },
        {
            id: 16,
            title: "Black Mirror",
            director: "Charlie Brooker",
            year: 2011,
            genre: "Sci-fi",
            rating: 8.8,
            type: "series",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/6nDRo824oyBwg1prOZHc8UtonVB.jpg"
        },
        {
            id: 17,
            title: "Fight Club",
            director: "David Fincher",
            year: 1999,
            genre: "Drama",
            rating: 8.8,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/sgTAWJFaB2kBvdQxRGabYFiQqEK.jpg"
        },
        {
            id: 18,
            title: "Mindhunter",
            director: "David Fincher",
            year: 2017,
            genre: "Thriller",
            rating: 8.6,
            type: "series",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/fbKE87mojpIETWepSbD5Qt741fp.jpg"
        },
        {
            id: 19,
            title: "The Big Lebowski",
            director: "Coen Brothers",
            year: 1998,
            genre: "Comedy",
            rating: 8.1,
            type: "movie",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/EJFkJD9BH400jfzKz3W5xLYHQa.jpg"
        },
        {
            id: 20,
            title: "True Detective",
            director: "Nic Pizzolatto",
            year: 2014,
            genre: "Thriller",
            rating: 8.9,
            type: "series",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/xZSuQm2KQQKoVKf31HgUWkjAVga.jpg"
        },
        {
            id: 21,
            title: "The Social Network",
            director: "David Fincher",
            year: 2010,
            genre: "Drama",
            rating: 7.7,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/2GtDmIdxkJ5NZG97yhJQtM8Wn1H.jpg"
        },
        {
            id: 22,
            title: "Rick and Morty",
            director: "Justin Roiland",
            year: 2013,
            genre: "Comedy",
            rating: 9.1,
            type: "series",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/5Yiep9EwcQgLolg013ETBVqHxuD.jpg"
        },
        {
            id: 23,
            title: "Shutter Island",
            director: "Martin Scorsese",
            year: 2010,
            genre: "Thriller",
            rating: 8.2,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/56utveUWJwmG12YU7c2zKw6pbRZ.jpg"
        },
        {
            id: 24,
            title: "Dark",
            director: "Baran bo Odar",
            year: 2017,
            genre: "Sci-fi",
            rating: 8.8,
            type: "series",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/hRP7N2uI0pokxnkcMFONoOZnxbv.jpg"
        },
        {
            id: 25,
            title: "Superbad",
            director: "Greg Mottola",
            year: 2007,
            genre: "Comedy",
            rating: 7.6,
            type: "movie",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/ftUDFRYywWzajElI2RT9NIno2PS.jpg"
        },
        {
            id: 26,
            title: "Perfect Blue",
            director: "Satoshi Kon",
            year: 1997,
            genre: "Thriller",
            rating: 8.0,
            type: "movie",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/kk8p22JheV6MB0fBXOOUgZK9UWQ.jpg"
        },
        {
            id: 27,
            title: "Tokyo Godfathers",
            director: "Satoshi Kon",
            year: 2003,
            genre: "Drama",
            rating: 7.8,
            type: "movie",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/r8SzZKHfF1lzu9SpXk1afmaviC0.jpg"
        },
        {
            id: 28,
            title: "Cowboy Bebop",
            director: "Shinichiro Watanabe",
            year: 1998,
            genre: "Sci-fi",
            rating: 8.9,
            type: "series",
            watched: true,
            image: "https://img.anmosugoi.com/file/media-sugoi/2021/06/Cowboy-Bebop.jpg"
        },
        {
            id: 29,
            title: "Vinland Saga",
            director: "Shuhei Yabuta",
            year: 2019,
            genre: "Drama",
            rating: 8.8,
            type: "series",
            watched: false,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/vUHlpA5c1NXkds59reY3HMb4Abs.jpg"
        },
        {
            id: 30,
            title: "The Wind Rises",
            director: "Hayao Miyazaki",
            year: 2013,
            genre: "Drama",
            rating: 7.8,
            type: "movie",
            watched: true,
            image: "https://image.tmdb.org/t/p/w600_and_h900_face/a1DKL2yPyxoZthv0du5gcAWA0gw.jpg"
        }
    ]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const [filters, setFilters] = useState({
        search: "",
        type: "all",
        genre: "all",
        sortBy: null,
        order: "ascendant"
    })

    const filteredList = items.filter(item => {
        const matchSearch =
            item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            item.director.toLowerCase().includes(filters.search.toLowerCase());

        const matchType = filters.type === "all" || item.type === filters.type;

        const matchGenre = filters.genre === "all" || item.genre === filters.genre;

        return matchSearch && matchType && matchGenre;
    })
        .sort((a, b) => {
            if (!filters.sortBy) return 0;
            const modifier = filters.order === "ascendant" ? 1 : -1;
            return (a[filters.sortBy] - b[filters.sortBy]) * modifier;
        })

    const genreCounts = items.reduce((acc, item) => {
        const genre = item.genre;
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
    }, {});

    const watchedList = filteredList.filter(item => item.watched);

    const unwatchedList = filteredList.filter(item => !item.watched);

    return (
        <div>
            <Title text="NOT-FLIX" />
            
            <Filters filters={filters} setFilters={setFilters} genreCounts={genreCounts} />
            <h2>Vistas ({watchedList.length})</h2>
            <ListItems list={watchedList} />
            <h2>Por ver ({unwatchedList.length})</h2>
            <ListItems list={unwatchedList} />
            <FormItem onAddItem={handleAddItem} />
        </div>
    )
}