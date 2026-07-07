import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import notes from './notes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

let id = 1;

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set static default directory to public/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (r, s) => {
    s.redirect("/notes");
})

app.get("/notes", (r, s) => {
    s.render("index", {notes});
})

app.post("/create", (r, s) => {
    // console.log(r.body.author);
    // console.log(r.body.message);

    let newMessage = {id: id++, author: String(r.body.author), message: String(r.body.message), color: String(r.body.color)};
    notes.push(newMessage);

    s.redirect("/notes");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});