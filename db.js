import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(process.env.DB_URL, // Including the database name in the URL
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.error("Could not connect to database.", error);
    }
};

export default connectDB;
