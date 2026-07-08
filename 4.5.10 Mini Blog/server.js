import express from "express";
import path from "path";
import { fileURLToPath } from "url";    
import methodOverride from "method-override";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

import {blogs} from './blogs.js';

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set static default directory to public/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (r, s) => {
    s.redirect("/blogs");
})

app.get("/blogs", (r, s) => {
    s.render("index", {blogs});
})

app.get("/blogs/:id", (req, res) => {
    const id = Number(req.params.id); // Convert URL parameter to a number

    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        return res.status(404).send("Blog not found");
    }

    res.render("blog", { blog });
});

app.delete("/blogs/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = blogs.findIndex(blog => blog.id === id);

    if (index === -1) {
        return res.status(404).send("Blog not found");
    }

    blogs.splice(index, 1);

    res.redirect("/blogs");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});