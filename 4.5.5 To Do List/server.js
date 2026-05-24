import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";    

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set static default directory to public/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const eventDate = new Date();

let to_do_list = [{
    date: eventDate.toDateString(),
    time: eventDate.toLocaleTimeString(),
    task: "Insert your new task right here."
}];

app.get("/", (r, s) => {
    s.render("index", {to_do_list});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});