const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let movies = {};
let id_counter = 1;

// GET /movies
app.get("/movies", (req, res) => {
  console.log("GET /movies");
  res.json(movies);
});

// GET /movies/:id
app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies[id];
  if (movie) {
    res.json(movie);
    console.log("GET /movies/:id", id);
  } else {
    res.status(404).json({ message: "Movie not found" });
    console.log("Movie not found");
  }
});

// POST /movies
app.post("/movies", (req, res) => {
  const movie = req.body;
  movie.id = id_counter++;
  movies[movie.id] = movie;

  res.status(201).json(movie);

  console.log("POST /movies", movie);
});

// PUT /movies/:id
app.put("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies[id];
  if (movie) {
    const newMovie = req.body;
    newMovie.id = movie.id;
    movies[id] = newMovie;
    res.status(200).json(newMovie);

    console.log("PUT /movies/:id", newMovie);
  } else {
    res.status(404).json({ message: "Movie not found" });
    console.log("Movie not found");
  }
});

// DELETE /movies/:id
app.delete("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies[id];
  if (movie) {
    delete movies[id];
    res.status(204).end();
    console.log("DELETE /movies/:id", id);
  } else {
    res.status(404).json({ message: "Movie not found" });
    console.log("Movie not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
