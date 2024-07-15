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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
