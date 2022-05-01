const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const maxAge = 3 * 24  * 60 * 60;

// Relocate user model
const User = require('../models/userModel');

// SignUp User 
const signupUser = asyncHandler(async (req, res) => {
    
    const { name, email, password, password2 } = req.body;
    
    // Check if all fields are fill
    if (!name || !email || !password || !password2) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    
    // Check if user exists
    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    
    // Check if password and confirm password are similar
    if (password !== password2) {
        res.status(400);
        throw new Error('Please enter the same password');
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create user with hashpassword
    const user = await User.create({
        name, email, password: hashedPassword
    })

    // Display user info with newly generate token
    if (user) {
        res.status(201).json({
            _id: user.id, 
            name: user.name, 
            email: user.email, 
            token: createToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data');
    }
})

// Signin User
const signinUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    // Check for user email
    const user = await User.findOne({email});
    
    // Compare prompt password and save password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id, 
            name: user.name, 
            email: user.email,
            token: createToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials');
    }
})

// Signout
const signoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt','', { maxAge: 1 });
    res.redirect('/');
})

// Generate JWT with 30 days expiration
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    })
}

module.exports = { signupUser, signinUser, signoutUser }