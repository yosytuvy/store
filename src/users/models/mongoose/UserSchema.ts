import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
  email: { type: String, required: true, minLength: 5 },
  password: { type: String, required: true, minLength: 7},
}, {versionKey: ""}
);

const User = model("user", UserSchema);
export default User;