const app = require('../backend/src/app');
const { connectDatabase } = require('../backend/src/db');

module.exports = async function handler(req, res) {
  try {
    await connectDatabase();
    return app(req, res);
  } catch (error) {
    console.error('Database connection error:', error);
    return res.status(503).json({ error: 'DatabaseUnavailable' });
  }
};
