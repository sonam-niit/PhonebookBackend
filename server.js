const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then(resp=>console.log("Conncted with DB"))
.catch(err=>console.log("Error in DB Connection",err))

const app= express();
app.use(express.json());
app.use(cors())

app.use('/api/phone',require('./routes/phone_routes'));

app.listen(5000,()=>{
    console.log("Application started in PORT 5000");
})