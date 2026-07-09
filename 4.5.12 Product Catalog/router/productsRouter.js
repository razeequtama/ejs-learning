import express from 'express';

const productsRouter = express.Router();
import products from '../products.js';

productsRouter.get("/", (r, s) => {
    // let name = r.query.productName;
    // console.log(name);
    s.render("index", {products});
})

productsRouter.get("/:name", (r, s) => {
    console.log(r.params);
    s.send(r.params.name);
})

export default productsRouter;