import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        enum: ["buyer", "seller", "admin"],
        default: "buyer",
    }
})

export const User = mongoose.models.User || mongoose.model("User", userSchema);