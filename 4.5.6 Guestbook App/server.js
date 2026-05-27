import express from "express";
import path from "path";
import { fileURLToPath } from "url";    

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

let messages = [{
                    from: "Raze",
                    message: "Hey. Just wanna let you know that you're doing a good job the second you decided to be the better person.",
                    id: 1
                },
                {
                    from: "Billy",
                    message: "Scorched Earth.",
                    id: 2
                },
                {
                    from: "Frenchie",
                    message: "I bet you never danced a day in your live.",
                    id: 3
                }
];

let id = 4;

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set static default directory to public/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (r, s) => {
    s.render("index", {messages});
});

app.post("/", (r, s) => {
    const newMessage = {
        from: r.body.nameInput,
        message: r.body.messageInput,
        id: id
    };

    id++;

    messages.push(newMessage);

    s.redirect("/");
});

app.get("/message", (r, s) => {
    const messageId = Number(r.query.messageId);

    const message = messages.find(m => m.id === messageId);

    if (!message) {
        return s.send("No message!");
    }

    s.send(message.message);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});;