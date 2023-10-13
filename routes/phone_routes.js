const express= require('express');
const router= express.Router();

const contacts=[
    {id:1,name:"Alex",phone:9867564589},
    {id:2,name:"Bob",phone:7867895645}
];
router.get("/",(req,res)=>{
    res.status(200).send(contacts);
})
router.post("/",(req,res)=>{
    const {name,phone}=req.body;
    contacts.push({id:contacts.length+1,name,phone});
    res.status(201).send({message:"User Created Successfully"});
})

module.exports=router;