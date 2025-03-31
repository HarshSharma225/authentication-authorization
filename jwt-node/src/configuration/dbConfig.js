
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/jwt_db");
mongoose.connection.on("connected", () => {
    console.log("DB connected")
})
mongoose.connection.on("error", (err) => {
    console.log(`DB error: ${err}`)
})

module.exports = mongoose;