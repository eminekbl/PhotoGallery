const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
        })
    console.log('MongoDB Connected')

}

module.exports = connectDB