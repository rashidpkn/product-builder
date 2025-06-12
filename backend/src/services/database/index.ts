import mongoose from 'mongoose';

const connectToDatabase = async (uri: string): Promise<void> => {
  mongoose.connection.on('connecting', () => {
    console.log('Connecting to MongoDB...');
  });

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB.');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB.');
  });

  mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

export default connectToDatabase;
