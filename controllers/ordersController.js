const jwt = require('jsonwebtoken');

// Mock admin credentials
const ADMIN_USER = { username: "admin", password: "admin123" };

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
        // Genereer JWT-token
        const token = jwt.sign(
            { username: ADMIN_USER.username, role: 'admin' },
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzMzNjc0MTAzLCJleHAiOjE3MzM2Nzc3MDN9.0pioZ7DZ0CwM_-6gv42jpcm__SKKyNYV13y3_h8cuqw', // Zet hier je secret key
            { expiresIn: '1h' }
        );

        res.status(200).json({
            status: "success",
            data: { token }
        });
    } else {
        res.status(401).json({
            status: "fail",
            message: "Unauthorized: Invalid credentials"
        });
    }
};
