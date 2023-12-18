const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // Vérifier si le token a expiré
    const isExpired = new Date(decoded.exp * 1000) < new Date();
    if (isExpired) {
      return res.status(401).json({ success: false, message: 'Unauthorized - Token expired' });
    }

    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

module.exports = requireAuth;
