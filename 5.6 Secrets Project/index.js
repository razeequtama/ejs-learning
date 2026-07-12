// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT;
const API_URL = process.env.API_URL;


// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set static default directory to public/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (r, s) => {
    try {
        const response = await axios.get(API_URL + "/random");
        const result = response.data;
        let secret = result.secret;
        let username = result.username;
        console.log(secret + " " + username);
        s.render("index", {secret: secret, user: username});
    } catch (error) {
        s.render("index", {secret: "failed", user: "failed"});
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});