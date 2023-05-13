import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
    role: string;
}

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
    },
}, {timestamps: true});

export const User = model<IUser>("User", UserSchema);