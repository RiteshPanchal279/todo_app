import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
});

export const Todos = mongoose.model("Todos",userSchema)
