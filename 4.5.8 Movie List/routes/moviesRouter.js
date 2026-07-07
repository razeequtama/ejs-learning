import express from 'express';
import movies from '../movies.js';
import moviesComedyRouter from './moviesComedyRouter.js';
import moviesHorrorRouter from './moviesHorrorRouter.js';
import moviesSciFiRouter from './moviesSciFiRouter.js';

const moviesRouter = express.Router();

moviesRouter.get("/", (r, s) => {
    s.json(movies);
})

moviesRouter.use("/comedy", moviesComedyRouter);
moviesRouter.use("/horror", moviesHorrorRouter);
moviesRouter.use("/scifi", moviesSciFiRouter);

export default moviesRouter;