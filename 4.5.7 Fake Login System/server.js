import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const database = [
    {
        id: 1,
        username: "Raze",
        password: "raze123",
        points: 0
    },
    {
        id: 2,
        username: "Jett",
        password: "jett123",
        points: 150
    },
    {
        id: 3,
        username: "Phoenix",
        password: "phoenix123",
        points: 320
    },
    {
        id: 4,
        username: "Sage",
        password: "sage123",
        points: 275
    },
    {
        id: 5,
        username: "Cypher",
        password: "cypher123",
        points: 410
    }
];

// Middleware
function authenticate(req, res, next) {
    const { username, password } = req.body;

    const user = database.find(
        user =>
            user.username === username &&
            user.password === password
    );

    if (!user) {
        return res.status(401).send("Invalid username or password.");
    }

    req.user = user;
    next();
}

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.redirect("/login");
});

app.get("/login", (req, res) => {
    res.render("index");
});

app.post("/login", authenticate, (req, res) => {
    res.send(`
        <h1>Welcome ${req.user.username}</h1>
        <p>ID: ${req.user.id}</p>
        <p>Points: ${req.user.points}</p>
    `);
})

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
})