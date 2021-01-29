const mongoose = require('mongoose');

const dbConnect = () => {
    //connect db
    mongoose.connect(process.env.MONGODB_URL, {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    }).then(() => console.log("db connected")).catch((err) => console.log(err));
    // zoKjg1xIaZ7CrAlI  okay

}

module.exports = dbConnect;