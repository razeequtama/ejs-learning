import express from "express";
import path from "path";
import { fileURLToPath } from "url";    
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

app.get("/", (r, s) => {
    s.render("index", {username: "Raze", age: 20, hobby: "Story Telling"});
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})