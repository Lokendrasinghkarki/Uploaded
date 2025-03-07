import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // ✅ Load environment variables

const mongoURI = process.env.MONGO_URL; // ✅ Get MongoDB URL from .env

if (!mongoURI) {
  console.error("❌ MONGO_URL is missing in .env file!");
  process.exit(1);
}

const connect = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connected Successfully!");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error);
    process.exit(1);
  }
};

export default connect;
