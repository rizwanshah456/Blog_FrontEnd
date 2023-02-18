const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const router = require("./Routes/blog")
const cors = require("cors")
const app = express();
dotenv.config();
mongoose.set('strictQuery', false);

app.use(cors())
app.use(express.json())
app.use("/",router)


mongoose.connect(process.env.MONGO_URI,()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT} and connected to database`)
    })

})