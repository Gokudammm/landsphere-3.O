require('dotenv').config();
const app = require('./src/app');
const { connectDatabase } = require('./src/db');

const port = process.env.PORT || 5000;

connectDatabase()
  .then(() => app.listen(port, () => console.log(`LandSphere API: http://localhost:${port}`)))
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });
