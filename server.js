// require internal and external modules
const express = require("express");
const fs = require("fs");
const path = require("path");
const notesDb = require("./db/db.json");
const noteRoutes = require("./routes/noteRoutes");

// set up express as object and direct the port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware for parsing json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// points to public directory
app.use(express.static("public"));
app.use("/api", noteRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// listener on port 3001
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
