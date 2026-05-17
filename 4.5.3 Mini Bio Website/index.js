import express from "express";
import path from "path";
import { fileURLToPath } from "url";   

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from basic server!');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});