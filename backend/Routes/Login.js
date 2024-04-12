const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/login', async (req,res)=>{
    const {username,password}= req.body
    try {
        const user = await User.findOne({username});
        if(!user){
            console.log("User not found")
            return res.status(404).json({error:'User not found'});
        }

        const passwordMatch = await bcrypt.compare(password,user.password);
        if(!passwordMatch){
            console.log("Incorrect password")
            return res.status(401).json({error:'Invalid password'})
        }

        let role;
        if (user.username === 'admin') {
        role = 'admin';
        } else if (user.username === 'clubhead') {
        role = 'clubhead';
        } else {
        role = 'user'; // Default role
    }
        const token = jwt.sign({ username: user.username ,role}, 'secret', { expiresIn: '1h' });
        res.json({ token,role });


        
    } catch (error) {
        console.error('Login error:', error);
        console.log("Login Error")
        res.status(500).json({ error: 'An error occurred during login' });
    }
})

module.exports = router;