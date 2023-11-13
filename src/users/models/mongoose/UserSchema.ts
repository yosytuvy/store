import { Schema, model } from "mongoose";

export const UserSchema = new Schema(
  {
    _id: { type: Object, required: false },
    email: { type: String, required: true, minLength: 5 },
    password: { type: String, required: true, minLength: 8 },
  },
  { versionKey: "" }
);

const User = model("user", UserSchema);
export default User;
