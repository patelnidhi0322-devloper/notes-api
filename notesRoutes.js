const express = require("express");
const Note = require("./models/Note");

const router = express.Router();

// Add Note
router.post("/notes", async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content
  });
  await note.save();
  res.json({ message: "Note added!", note });
});

// Get Notes
router.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Delete Note
router.delete("/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted!" });
});

module.exports = router;
