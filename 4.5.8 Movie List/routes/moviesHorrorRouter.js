import express from 'express';
import movies from '../movies.js';

const moviesHorrorRouter = express.Router();

moviesHorrorRouter.get("/", (r, s) => {
    let horrorMovies = movies.filter(movie => movie.genre === "horror");
    s.json(horrorMovies);
})

export default moviesHorrorRouter;