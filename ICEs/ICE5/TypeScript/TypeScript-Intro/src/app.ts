import { Movie } from './src/types/movie.interface.js';
import { movies } from './src/data/data.js';

class MovieLibrary {
    private movies: Movie[];
    private container: HTMLElement;

    constructor(movies: Movie[]) {
        this.movies = movies;
        const movieList = document.getElementById("movieList");
        if (!movieList) {
            throw new Error("Movie List container not found!!!");
        }
        this.container = movieList;
    }

    private createNewMovieCard(movie: Movie): HTMLElement {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        const actorList = movie.actors.map(actor =>
            `<li>${actor.firstName} ${actor.lastName}</li>`
        ).join("");

        card.innerHTML = `
            <h2>${movie.title}</h2>
            <div class="movie-info">
                <p>Director: ${movie.director}</p>
                <p>Year: ${movie.year}</p>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
                <ul>${actorList}</ul>
            </div>
        `;

        return card;
    }

    public displayMovies(): void {
        this.movies.forEach(movie => {
            const movieCard = this.createNewMovieCard(movie);
            this.container.appendChild(movieCard);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let message: string = "Hello from TypeScript!";
    console.log(message);

    let library = new MovieLibrary(movies);
    library.displayMovies();
    console.log(library);
});
