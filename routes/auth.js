const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin123') {
        const token = jwt.sign(
            { username, role: 'admin' }, 
            process.env.JWT_SECRET || 'default_secret_key', 
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            status: 'success',
            data: { token },
        });
    } else {
        return res.status(401).json({
            status: 'fail',
            message: 'Ongeldige gebruikersnaam of wachtwoord',
        });
    }
});

module.exports = router;
