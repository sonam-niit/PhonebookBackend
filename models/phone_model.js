const mongoose= require('mongoose');

const phoneSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},{ timestamps: true })

const PhoneModel= mongoose.model('PhoneModel',phoneSchema);

module.exports=PhoneModel;