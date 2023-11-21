// models/noteModel.js
const db = require('../config/db');

const createNote = (title, content, userId) => {
  return new Promise((resolve, reject) => {
    // Insert note into the database
    // ...

    db.query('INSERT INTO notes (title, content, user_id) VALUES (?, ?, ?)', [title, content, userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getNotesByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    // Fetch notes from the database based on user ID
    // ...

    db.query('SELECT * FROM notes WHERE user_id = ?', [userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const updateNote = (noteId, title, content, userId) => {
  return new Promise((resolve, reject) => {
    // Update note in the database
    // ...

    db.query('UPDATE notes SET title = ?, content = ? WHERE id = ? AND user_id = ?', [title, content, noteId, userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteNote = (noteId, userId) => {
  return new Promise((resolve, reject) => {
    // Delete note from the database
    // ...

    db.query('DELETE FROM notes WHERE id = ? AND user_id = ?', [noteId, userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  createNote,
  getNotesByUserId,
  updateNote,
  deleteNote,
};
