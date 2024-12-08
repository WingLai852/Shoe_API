const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Simuleer admin inloggegevens (hardcoded voorbeeld)
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign(
      { id: 1, role: 'admin' }, // Payload
      process.env.JWT_SECRET,   // Secret key uit je .env
      { expiresIn: '1h' }       // Token vervalt na 1 uur
    );

    return res.status(200).json({
      status: 'success',
      data: { token },
    });
  }

  res.status(401).json({
    status: 'fail',
    message: 'Ongeldige gebruikersnaam of wachtwoord',
  });
};
