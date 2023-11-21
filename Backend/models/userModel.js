const db = require('../config/db');
const bcrypt = require('bcrypt');
const { promisify } = require('util');

const hashAsync = promisify(bcrypt.hash);

const createUser = async (email, password) => {
  try {
    // Hash the password
    const hashedPassword = await hashAsync(password, 10);

    // Insert user into the database
    const [results] = await db.promise().query('INSERT INTO auth (email, password) VALUES (?, ?)', [email, hashedPassword]);
    return results;
  } catch (err) {
    console.error('Error creating user:', err.message);
    throw err; // Re-throw the error to propagate it
  }
};

const getUserByEmail = async (email) => {
  try {
    // Fetch user from the database by email
    const [results] = await db.promise().query('SELECT * FROM auth WHERE email = ?', [email]);
    return results[0];
  } catch (err) {
    console.error('Error getting user by email:', err.message);
    throw err; // Re-throw the error to propagate it
  }
};

module.exports = {
  createUser,
  getUserByEmail,
};
