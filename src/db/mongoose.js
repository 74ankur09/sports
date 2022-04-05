

const mongoose = require('mongoose')
require('dotenv').config()

console.log('envvvvvvvvvvvvvvvvvvvvvvvvvvvv')
PASSWORD = process.env.PASSWORD
console.log(PASSWORD)
const dbURI = 'mongodb+srv://9ankur9' + ':' + process.env.PASSWORD + '@cluster0.wjlog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';



mongoose.connect(process.env.MONGODB_URL|| dbURI, {
    useNewUrlParser: true,

}).catch( (error) => {
    console.log(error);
})

