import mongoose from "mongoose";

async function connect() {
    try {
       await mongoose.connect(process.env.MONGO_URI ?? "")
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}
connect()
export default mongoose