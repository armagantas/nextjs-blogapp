import mongoose from "mongoose";

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
