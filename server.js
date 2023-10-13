const express= require('express');
const cors= require('cors');

const app= express();
app.use(express.json());
app.use(cors())

app.use('/api/phone',require('./routes/phone_routes'));

app.listen(5000,()=>{
    console.log("Application started in PORT 5000");
})