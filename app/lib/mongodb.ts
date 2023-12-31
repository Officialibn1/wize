import mongoose from "mongoose";

export const connectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.WIZE_MONGO_URI as string);

		console.log("Connected to MongoDB");
	} catch (error: any) {
		console.log("Error connecting to mongoDB", error.message);
	}
};
