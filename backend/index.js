const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

require("dotenv").config()

app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connected!!")
}).catch((error)=> {
    console.log(error.messahe)
})

const server = app.listen(process.env.PORT,()=> {
    console.log(`Server started on port ${process.env.PORT}`)
})