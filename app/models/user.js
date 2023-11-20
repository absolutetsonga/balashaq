import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Fullname is required!"],
  },
  
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },

  number: {
    type: Number,
  },

  number_of_children: {
    type: Number,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
