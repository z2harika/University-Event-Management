const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://varsha_mannem:varsha14@cluster0.tjubre5.mongodb.net/UEM';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;
