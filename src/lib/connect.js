import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
    }
    catch (error) {
        console.log(error);
    }
}