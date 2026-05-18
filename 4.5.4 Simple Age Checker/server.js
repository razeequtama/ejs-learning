import express from "express";
import path from "path";
import { fileURLToPath } from "url";    

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

function pickAge(r, s, next)
{
    r.age = r.body["age"];
    next(); 
}

app.get("/", (r, s) => {
    s.render("index");
});

app.post("/submit", pickAge, (r, s) => {
    let ageInfo = r.age;
    s.render("index", {age: ageInfo});
})

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});