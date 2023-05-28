import  mongoose from "mongoose"


export const connectDB = async () => {
    try {
         if (mongoose.connection.readyState >= 1) {
        return mongoose.connection.asPromise();
    }
    return mongoose.connect(process.env.MONGO_URI as string)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}