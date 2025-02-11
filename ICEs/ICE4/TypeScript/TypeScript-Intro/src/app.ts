let movies: string[] = [
    "Upload - Sci-fi",
    "Interstellar",
    "Brooklyn 99",
    "The Recruit",
    "LouderMilk"

]

function createMoviePost(movie: string){
    let container = document.querySelector(".container")
    let newMoviePost = document.createElement("p")
    newMoviePost.innerHTML = movie
    container?.appendChild(newMoviePost)
}

document.addEventListener('DOMContentLoaded',()=>{    
    movies.forEach(createMoviePost)
})