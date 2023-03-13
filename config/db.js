const mongoose = require("mongoose");
const db = process.env.MONGO_URI


const connectDB = async () => {

    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, { useNewUrlParser: true})
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = connectDB