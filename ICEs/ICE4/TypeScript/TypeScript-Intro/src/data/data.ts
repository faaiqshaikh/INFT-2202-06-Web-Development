import { Movie } from "../types/movie.interface";
import { Rating } from "../enums/rating.enum";

export let movies: Movie[] = [
    {
        id: 1,
        title: "Interstellar",
        director: "Christpher Nolan",
        year: 2014,
        genre: "Sci-fi",
        rating: Rating.PG13,
        actors: [
            {
                id: 2,
                firstName: "Matthew",
                lastName: "McConaughey"
            }
        ]            
    },
    {
        id: 2,
        title: "Moana 2",
        director: "Christpher Nolan",
        year: 2024,
        genre: "Adventure",
        rating: Rating.PG,
        actors: [
            {
                id: 3,
                firstName: "Dwayne",
                lastName: "Johnson"
            }
        ]            
    }
]
