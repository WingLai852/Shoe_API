const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ status: 'fail', message: 'Geen token verstrekt' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Voeg gebruikersdata toe aan request
    next();
  } catch (error) {
    return res.status(401).json({ status: 'fail', message: 'Ongeldige token' });
  }
};