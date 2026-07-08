import express from "express";
import path from "path";
import { fileURLToPath } from "url";    
import { answers } from './answers.js';

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

app.get("/", (req, res) => {
    res.render("index", {
        correct: 0,
        wrong: 0
    });
});

app.post("/answer", (req, res) => {
    let correct = 0;
    let wrong = 0;

    for (const key in answers) {
        if (req.body[key] === answers[key]) {
            correct++;
        } else {
            wrong++;
        }
    }

    res.render("index", {
        correct,
        wrong
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});