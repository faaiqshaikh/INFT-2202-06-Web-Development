export interface Movie {
    id: number;
    title: string;
    director: string;
    year: number;
    genre: string;
    rating: string;
    actors: Actor[]
}

interface Actor {
    id: number;
    firstName: string;
    lastName: string;
}