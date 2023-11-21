const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db');
const jwt = require("jsonwebtoken");
const UserRouter = express.Router();

// User Registration

UserRouter.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {

        try {

            const [existingEmail] = await db.promise().query('SELECT email FROM auth WHERE email = ?', [email]);

            if (existingEmail.length > 0) {
                return res.status(400).json({ msg: 'Email already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 5);

            await db.promise().query('INSERT INTO auth (email, password) VALUES (?, ?)', [
                email,
                hashedPassword,
            ]);

            res.status(200).json({ msg: 'User Registered Successfully' });
        } catch (err) {
            console.error(err);
            res.status(400).json({ msg: err.message || 'Something went wrong' });
        }
    } else {
        res.status(400).json({ msg: "Please provide the details" })
    }
});


// User Login



UserRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ msg: "Please Provide Credentials" });
        }

        const [userdata] = await db.promise().query("SELECT * FROM auth WHERE email=?", [email]);

        if (userdata.length >= 1) {
            const result = await new Promise((resolve, reject) => {
                bcrypt.compare(password, userdata[0].password, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });

            if (result) {
                const token = jwt.sign({ user_id: userdata[0].id }, 'sgate');
                return res.status(200).json({ msg: "Login Successfully", token });
            } else {
                return res.status(400).json({ msg: "Please Enter Correct Credentials" });
            }
        } else {
            return res.status(400).json({ msg: "User Is Not Registered" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
});

    

    module.exports={UserRouter}