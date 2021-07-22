require("dotenv").config()

const mongo_uri = process.env.MONGO_URI

const mongoose = require("mongoose")
const connectDB = async () => {
    try{
        await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connection Successfull")
    } catch(error){
        console.log("MongoDB Connection Failed")
        process.exit(1)
    }
}

module.exports = connectDB