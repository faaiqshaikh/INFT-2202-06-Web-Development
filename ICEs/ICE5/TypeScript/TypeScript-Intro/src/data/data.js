"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movies = void 0;
const rating_enum_1 = require("../enums/rating.enum");
exports.movies = [
    {
        id: 1,
        title: "Interstellar",
        director: "Christpher Nolan",
        year: 2014,
        genre: "Sci-fi",
        rating: rating_enum_1.Rating.PG13,
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
        rating: rating_enum_1.Rating.PG,
        actors: [
            {
                id: 3,
                firstName: "Dwayne",
                lastName: "Johnson"
            }
        ]
    }
];
