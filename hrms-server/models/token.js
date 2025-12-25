import mongoose from "mongoose";

const token = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token:{
    type: String,
    required: true,
  }
});

export default mongoose.model("Token", token);
