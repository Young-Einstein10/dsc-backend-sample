import { Model, model, Schema } from "mongoose";
import { IUser } from "./types";

export const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  avatar: { type: String },
  rating: { type: Number },
  role: { type: String, required: true },
  isEmailVerified: { type: Boolean, default: false },
  claims: {
    create: {
      type: Boolean,
      required: true
    },
    read: {
      type: Boolean,
      required: true
    },
    update: {
      type: Boolean,
      required: true
    },
    delete: {
      type: Boolean,
      required: true
    }
  },
  savedPosts: [
    {
      post: {
        type: Schema.Types.ObjectId
      }
    }
  ]
});

export const User: Model<IUser> = model<IUser>("User", UserSchema);
