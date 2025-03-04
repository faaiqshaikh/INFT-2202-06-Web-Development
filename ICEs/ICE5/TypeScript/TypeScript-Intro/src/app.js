"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./src/data/data.js");
class MovieLibrary {
    constructor(movies) {
        this.movies = movies;
        const movieList = document.getElementById("movieList");
        if (!movieList) {
            throw new Error("Movie List container not found!!!");
        }
        this.container = movieList;
    }
    createNewMovieCard(movie) {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        const actorList = movie.actors.map(actor => `<li>${actor.firstName} ${actor.lastName}</li>`).join("");
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
    displayMovies() {
        this.movies.forEach(movie => {
            const movieCard = this.createNewMovieCard(movie);
            this.container.appendChild(movieCard);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let message = "Hello from TypeScript!";
    console.log(message);
    let library = new MovieLibrary(data_js_1.movies);
    library.displayMovies();
    console.log(library);
});
