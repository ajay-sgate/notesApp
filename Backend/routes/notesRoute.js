const express = require('express');
const db = require('../config/db');
const NotesRouter = express.Router();


// Get all the notes of the particular user

NotesRouter.get("/", async (req, res) => {
    const { user_id } = req.body
    // try {
    //     const [results] = await db.promise().query("SELECT * FROM notes WHERE user_id=? ORDER BY id DESC", [user_id])
    //     res.status(200).json(results)
    // } catch (err) {
    //     res.status(400).json({ msg: err })
    // }

    const { limit = 8, offset = 0 } = req.query;

    try {
        const [results] = await db.promise().query(
            "SELECT * FROM notes WHERE user_id=? ORDER BY id DESC LIMIT ? OFFSET ?",
            [user_id, parseInt(limit), parseInt(offset)]
        );
        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})


// Get single note of the particular user by note id

NotesRouter.get("/:id", async (req, res) => {
    const noteId = req.params.id;
    const { user_id } = req.body
    try {
        const [results] = await db.promise().query("SELECT * FROM notes WHERE id = ? AND user_id = ?", [noteId, user_id])
        res.status(200).json(results)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// Create new note for particular user

NotesRouter.post("/add", async (req, res) => {
    const { title, content, user_id } = req.body;

    try {
        const [results] = await db.promise().query('INSERT INTO notes (title, content, user_id) VALUES (?, ?, ?)', [title, content, user_id])
        res.status(200).json({ message: 'Note successfully created !!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Update note of particular user by note id

NotesRouter.patch("/update/:id", async (req, res) => {
    const { title, content, user_id } = req.body;
    const noteId = req.params.id;

    try {
        const [results] = await db.promise().query('UPDATE notes SET title = ?, content = ? WHERE id = ? AND user_id = ?', [title, content, noteId, user_id])
        res.status(200).json({ message: 'Note successfully updated !!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Delete note of particular user by note id


NotesRouter.delete("/delete/:id", async (req, res) => {
    const { user_id } = req.body;
    const noteId = req.params.id;

    try {
        const [results] = await db.promise().query('DELETE FROM notes WHERE id = ? AND user_id = ?', [noteId, user_id])
        res.status(200).json({ message: 'Note successfully deleted !!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = { NotesRouter }