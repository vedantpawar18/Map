// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt'); 
const User = require('../Models/userModels');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        username,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

router.post('/login', async (req, res) => {
    const { username, password } = req.body; 
    try {
      // Find the user by username
      const user = await User.findOne({ username });
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports = router;
