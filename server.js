const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Defining Routes
const actorRoutes = require("./routes/actor");
const genreRoutes = require("./routes/genre");
const movieRoutes = require("./routes/movie");
const userRoutes = require("./routes/director");

app.use("api/actors", actorRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/directors", userRoutes);

// Connecting to the MongoDB Atlas cluster
const DBURL =
  "mongodb+srv://pradeepsuk717:yKKLg2jTUbccxSWn@dreamnights.kuownle.mongodb.net/OMDB_API_Collection";
mongoose
  .connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to the database"))
  .catch((error) => console.log(error));

// Run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
