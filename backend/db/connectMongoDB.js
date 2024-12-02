import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to mongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectMongoDB;
