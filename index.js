const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let movies = {};

// GET /movies
app.get("/movies", (req, res) => {
  console.log("GET /movies");
  res.json(movies);
});

// POST /movies
app.post("/movies", (req, res) => {
  const movie = req.body;
  movie.id = id_counter++;
  movies[movie.id] = movie;

  res.status(201).json(movie);

  console.log("POST /movies", movie);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
