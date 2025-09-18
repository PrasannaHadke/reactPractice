const mongoose = require('mongoose')

const URI = process.env.MONGO_URI;

const connectDatabase = async () => {
   try {
     await mongoose.connect(URI)
     console.log(`Database Connected Successfully`);
   } catch (error) {
    console.error(error)
    process.exit(1)
   }

}

module.exports = connectDatabase