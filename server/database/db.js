import mongoose from 'mongoose';

const userName = 'Your Username'; // replace with your actual username
const password = 'Your Password'; // replace with your actual password
const dbName = 'Your Database Name'; // replace with your actual database name

const DB_URL = `mongodb+srv://${userName}:${encodeURIComponent(password)}@file.ryejijz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export const DBConnection = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Db connected');
  } catch (err) {
    console.log('Could not connect to database', err.message);
  }
};
