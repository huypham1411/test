import mongoose from 'mongoose';
require('dotenv').config();

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('connected');
    return;
  }

  try {
    const options = {
      dbName: 'Test',
      useNewUrlParser: true,
      // useUnifiedTopology: true,
    };

    await mongoose.connect(process.env.MONGODB_URI!, options);

    isConnected = true;
    console.log('DB connected');
  } catch (error) {
    console.log(error);
  }
};
