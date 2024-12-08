const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Fixed admin account (hardcoded voorbeeld)
  if (username === 'admin' && password === 'admin123') {
    // Maak een JWT-token
    const token = jwt.sign(
      { id: 1, role: 'admin' }, // Payload
      'secretKey123',          // Secret key (vervang door een veiliger wachtwoord)
      { expiresIn: '1h' }      // Verloopt na 1 uur
    );

    return res.status(200).json({
      status: 'success',
      data: { token },
    });
  }

  return res.status(401).json({
    status: 'fail',
    message: 'Invalid username or password',
  });
});

module.exports = router;
