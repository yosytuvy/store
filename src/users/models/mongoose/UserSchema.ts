import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, minLength: 5 },
    password: { type: String, required: true, minLength: 8 },
  },
  { versionKey: "" }
);

const User = model("user", UserSchema);
export default User;
