const express = require('express');
const db = require('./config/db');

const userController = require('./controllers/userController');
const noteController = require('./controllers/noteController');
const authToken = require('./middlewares/authMiddleware');

const app = express();
const PORT = 8080;


app.use(express.json());

// User routes
app.post('/register', userController.registerUser);
app.post('/login', userController.loginUser);
// Add other user routes... 

// Note routes
app.post('/notes', authToken, noteController.createNote);
app.get('/notes', authToken, noteController.getNotes);
app.patch('/notes/:id', authToken, noteController.updateNote);
app.delete('/notes/:id', authToken, noteController.deleteNote);
// Add other note routes...

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});