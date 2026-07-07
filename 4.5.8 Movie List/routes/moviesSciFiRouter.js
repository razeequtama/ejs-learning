import express from 'express';
import movies from '../movies.js';

const moviesSciFiRouter = express.Router();

moviesSciFiRouter.get("/", (r, s) => {
    let sciFiMovies = movies.filter(movie => movie.genre === "sci-fi");
    s.json(sciFiMovies);
})

export default moviesSciFiRouter;