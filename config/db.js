import mongoose from "mongoose";

const connectionString = process.env.MONGO_URL

const ConnectDatabase = async () => {
  try {
    await mongoose.connect(connectionString)
    console.log(`[INFO] MongoDB Connected, ${connectionString}`);
  } catch (error) {
    console.log('[ERROR] MongoDB Connection Failed');
    process.exit(1);
  }
}

export default ConnectDatabase;