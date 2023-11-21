// controllers/noteController.js
const noteModel = require('../models/noteModel');

const createNote = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.userId;

  try {
    await noteModel.createNote(title, content, userId);
    res.json({ message: 'Note created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getNotes = async (req, res) => {
  const userId = req.user.userId;

  try {
    const notes = await noteModel.getNotesByUserId(userId);
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateNote = async (req, res) => {
  const { title, content } = req.body;
  const noteId = req.params.id;
  const userId = req.user.userId;

  try {
    await noteModel.updateNote(noteId, title, content, userId);
    res.json({ message: 'Note updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteNote = async (req, res) => {
  const noteId = req.params.id;
  const userId = req.user.userId;

  try {
    await noteModel.deleteNote(noteId, userId);
    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
  // Add other note-related controller functions if needed
};
