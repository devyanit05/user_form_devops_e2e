const User = require('../models/User');

const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = new User({ name, email, age });
        await user.save();
        console.log("User created")
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.log("error: ", error)
        res.status(500).json({ message: 'Server error', error: error.message });

    }
};

module.exports = { createUser };