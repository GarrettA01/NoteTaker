const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");
const randoId = require("../helpers/randoId");
const api = require("express").Router();

//parses db.json
api.get("/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  res.json(notes);
});

//create new note
api.post("/notes", (req, res) => {
  const createNote = {
    title: req.body.title,
    text: req.body.text,
    id: randoId,
  };

  //parses db.son again to read new note
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  notes.push(createNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes));

  res.json(notes);
});

module.exports = api;
