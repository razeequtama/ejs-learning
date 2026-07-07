// export const movies = [
//   { title: "Die Hard", rating: 4.8, genre: "action" },
//   { title: "Superbad", rating: 4.5, genre: "comedy" },
//   { title: "John Wick", rating: 4.7, genre: "action" },
//   { title: "The Mask", rating: 4.2, genre: "comedy" },
//   { title: "Interstellar", rating: 4.9, genre: "sci-fi" }
// ]; // import-nya nanti "{ movies }"

// movies.js
const movies = [
  // --- ACTION ---
  { title: "Die Hard", rating: 4.8, genre: "action" },
  { title: "John Wick", rating: 4.7, genre: "action" },
  { title: "Mad Max: Fury Road", rating: 4.6, genre: "action" },
  { title: "The Dark Knight", rating: 4.9, genre: "action" },
  { title: "Gladiator", rating: 4.5, genre: "action" },
  { title: "Kill Bill: Vol. 1", rating: 4.4, genre: "action" },

  // --- COMEDY ---
  { title: "Superbad", rating: 4.5, genre: "comedy" },
  { title: "The Mask", rating: 4.2, genre: "comedy" },
  { title: "Step Brothers", rating: 4.1, genre: "comedy" },
  { title: "The Hangover", rating: 4.3, genre: "comedy" },
  { title: "Anchorman", rating: 4.0, genre: "comedy" },
  { title: "Shaun of the Dead", rating: 4.4, genre: "comedy" },

  // --- SCI-FI ---
  { title: "Interstellar", rating: 4.9, genre: "sci-fi" },
  { title: "The Matrix", rating: 4.8, genre: "sci-fi" },
  { title: "Blade Runner 2049", rating: 4.5, genre: "sci-fi" },
  { title: "Inception", rating: 4.8, genre: "sci-fi" },
  { title: "Dune", rating: 4.6, genre: "sci-fi" },
  { title: "Arrival", rating: 4.3, genre: "sci-fi" },

  // --- HORROR ---
  { title: "The Conjuring", rating: 4.2, genre: "horror" },
  { title: "Get Out", rating: 4.6, genre: "horror" },
  { title: "A Nightmare on Elm Street", rating: 4.0, genre: "horror" },
  { title: "Hereditary", rating: 4.4, genre: "horror" },
  { title: "The Shining", rating: 4.7, genre: "horror" },
  { title: "A Quiet Place", rating: 4.3, genre: "horror" },

  // --- DRAMA ---
  { title: "The Shawshank Redemption", rating: 4.9, genre: "drama" },
  { title: "Parasite", rating: 4.8, genre: "drama" },
  { title: "Whiplash", rating: 4.7, genre: "drama" },
  { title: "Forrest Gump", rating: 4.6, genre: "drama" },
  { title: "The Godfather", rating: 4.9, genre: "drama" },
  { title: "Fight Club", rating: 4.5, genre: "drama" }
];

export default movies; // <-- This allows the clean import! (importnya jadi movies doang)