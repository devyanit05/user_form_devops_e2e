const User = require('../models/User');

const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        console.log('Received request to create user with data:', { name, email, age });

        const user = new User({ name, email, age });
        await user.save();
        console.log('User created successfully:', user);

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { createUser };