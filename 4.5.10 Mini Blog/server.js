import express from "express";
import path from "path";
import { fileURLToPath } from "url";    

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

app.get("/", (r, s) => {
    s.redirect("/users");
})

app.get("/users", (r, s) => {
    s.render("index", {blogs});
})

// app.get("/users/:id", (r, s) => {
//     console.log(r.params.id);
//     s.redirect("/users");
// })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});