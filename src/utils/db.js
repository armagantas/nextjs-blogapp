import mongoose from "mongoose";

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
