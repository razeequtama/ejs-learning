import express from 'express';
import movies from '../movies.js';

const moviesComedyRouter = express.Router();

moviesComedyRouter.get("/", (r, s) => {
    let comedyMovies = movies.filter(movie => movie.genre === "comedy");
    s.json(comedyMovies);
})

export default moviesComedyRouter;