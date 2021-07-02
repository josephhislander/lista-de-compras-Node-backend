const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('Bases de datos online');

    } catch {
        throw new Error('Error a la hora de iniciar la DB')
    }

}


module.exports = {
    dbConnection
}