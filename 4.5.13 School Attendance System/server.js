import express from "express";
import path from "path";
import { fileURLToPath } from "url";    

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

import students from "./students.js";

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set static default directory to public/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (r, s) => {
    s.render("index", { students });
})

app.post("/verify", (r, s) => {
    let attendances = r.body.attendance;
    let attendingStudents = 0;

    for(let i = 0; i < attendances.length; i++)
    {
        if(attendances[i] === "on") attendingStudents++;
    }

    console.log(r.body.attendance);
    s.send(`There are ${attendingStudents} people in class!`);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});