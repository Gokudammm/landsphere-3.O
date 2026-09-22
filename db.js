const mongoose = require('mongoose');

let connecting = null;

async function connectDatabase() {
  if (mongoose.connection.readyState === 1) return mongoose.connection;
  if (!process.env.MONGODB_URI) return null;
  if (!connecting) {
    connecting = mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    }).finally(() => {
      connecting = null;
    });
  }
  return connecting;
}

module.exports = { connectDatabase };
