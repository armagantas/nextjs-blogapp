import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Connection error", error);
    throw new Error("Connection failed!");
  }
};

export default connect;
