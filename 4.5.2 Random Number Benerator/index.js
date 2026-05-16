import express from 'express';
// for __dirname
import path from "path";
import { fileURLToPath } from "url";    

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const animalNames = [
  "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Kangaroo", "Panda",
  "Koala", "Leopard", "Cheetah", "Wolf", "Fox", "Bear", "Deer", "Rabbit",
  "Squirrel", "Otter", "Raccoon", "Hedgehog", "Bat", "Monkey", "Gorilla",
  "Chimpanzee", "Orangutan", "Hippo", "Rhino", "Crocodile", "Alligator",
  "Turtle", "Frog", "Toad", "Snake", "Lizard", "Iguana", "Chameleon",
  "Parrot", "Eagle", "Falcon", "Owl", "Penguin", "Flamingo", "Peacock",
  "Shark", "Dolphin", "Whale", "Octopus", "Squid", "Crab", "Lobster",
  "Jellyfish", "Starfish", "Ant", "Bee", "Butterfly", "Dragonfly", "Spider",
  "Scorpion", "Horse", "Donkey", "Camel", "Goat", "Sheep", "Cow", "Pig",
  "Chicken", "Duck", "Goose", "Turkey", "Cat", "Dog", "Hamster", "Ferret",
  "Mole", "Buffalo", "Bison", "Yak", "Moose", "Seal", "Walrus", "Pelican",
  "Toucan", "Swan", "Cobra", "Viper", "Puma", "Jaguar", "Panther", "Hyena",
  "Meerkat", "Sloth", "Armadillo", "Tapir", "Wombat", "Platypus", "Emu",
  "Cassowary", "Alpaca", "Llama"
];

const colorNames = [
  "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown",
  "Black", "White", "Gray", "Cyan", "Magenta", "Lime", "Teal", "Navy",
  "Maroon", "Olive", "Silver", "Gold", "Beige", "Coral", "Crimson",
  "Indigo", "Ivory", "Khaki", "Lavender", "Lilac", "Mint", "Mustard",
  "Peach", "Plum", "Salmon", "Tan", "Turquoise", "Violet", "Amber",
  "Aquamarine", "Azure", "Bronze", "Charcoal", "Chocolate", "Copper",
  "Emerald", "Fuchsia", "Jade", "Lilac", "Mahogany", "Mauve", "Ochre",
  "Onyx", "Periwinkle", "Ruby", "Sapphire", "Scarlet", "Sepia", "SkyBlue",
  "Slate", "Taupe", "Topaz", "Ultramarine", "Viridian", "Wine", "Amethyst",
  "Apricot", "Blush", "Cerulean", "Denim", "Eggplant", "Flax", "Honey",
  "IceBlue", "JetBlack", "Lemon", "Mocha", "Orchid", "Pearl", "Quartz",
  "Rose", "Rust", "Sand", "Seafoam", "Smoke", "SteelBlue", "Sunset",
  "Tangerine", "Vanilla", "Walnut", "Watermelon", "Wheat", "Zaffre"
];

const gameTitles = [
  "Minecraft", "Fortnite", "Call of Duty", "Grand Theft Auto V",
  "The Legend of Zelda", "Super Mario Odyssey", "Cyberpunk 2077",
  "Elden Ring", "Dark Souls", "Bloodborne", "Sekiro",
  "Red Dead Redemption", "God of War", "Halo Infinite", "Apex Legends",
  "Valorant", "League of Legends", "Dota 2", "Overwatch", "Rocket League",
  "Counter-Strike", "PUBG", "Terraria", "Stardew Valley", "The Sims 4",
  "Animal Crossing", "Resident Evil", "Silent Hill", "Dead Space",
  "Mass Effect", "Dragon Age", "Skyrim", "Oblivion", "Morrowind",
  "Fallout 4", "Fallout New Vegas", "Starfield", "Far Cry", "Assassin's Creed",
  "Watch Dogs", "Rainbow Six Siege", "Battlefield", "Need for Speed",
  "Forza Horizon", "Gran Turismo", "FIFA", "NBA 2K", "Madden NFL",
  "WWE 2K", "Street Fighter", "Tekken", "Mortal Kombat", "Soulcalibur",
  "Final Fantasy", "Kingdom Hearts", "Persona 5", "Yakuza", "Monster Hunter",
  "Devil May Cry", "Bayonetta", "Metal Gear Solid", "Death Stranding",
  "Hades", "Hollow Knight", "Celeste", "Cuphead", "Undertale",
  "Among Us", "Phasmophobia", "Subnautica", "No Man's Sky", "The Witcher 3",
  "Diablo IV", "Path of Exile", "World of Warcraft", "Runescape",
  "Clash Royale", "Clash of Clans", "Brawl Stars", "Pokemon Scarlet",
  "Pokemon Violet", "Palworld", "Roblox", "Genshin Impact",
  "Honkai Star Rail", "Destiny 2", "Warframe", "Left 4 Dead",
  "Portal 2", "Half-Life", "Team Fortress 2", "LittleBigPlanet",
  "Ratchet & Clank", "Jak and Daxter", "Crash Bandicoot", "Spyro",
  "Banjo-Kazooie"
];

// for EJS
// Set EJS as template engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Set static default directory to public/
app.use(express.static("public"));

// for ex: req.body["name"]
app.use(express.urlencoded({ extended: true }));

// Custom middleware (logger)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render("index");
});

app.post('/submit', (r, s) => {
  let generatedInfo = {
    number: Math.floor(Math.random() * 10),
    animalName: animalNames[Math.floor(Math.random() * animalNames.length)],
    colorName: colorNames[Math.floor(Math.random() * colorNames.length)],
    gameTitle: gameTitles[Math.floor(Math.random() * gameTitles.length)]
  };
  s.render("result", generatedInfo);
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Structured server running on http://localhost:${PORT}`);
});