const express = require('express');
const PhoneModel = require('../models/phone_model');
const router = express.Router();

const contacts = [
    { id: 1, name: "Alex", phone: 9867564589 },
    { id: 2, name: "Bob", phone: 7867895645 }
];
router.get("/", async (req, res) => {
    //res.status(200).send(contacts);
    try {
        const resp= await PhoneModel.find();
        res.status(200).send(resp);
    } catch (error) {
        res.status(500).send(error);
    }
})
router.post("/", async (req, res) => {
    const { name, phone } = req.body;
    // contacts.push({id:contacts.length+1,name,phone});
    // res.status(201).send({message:"User Created Successfully"});

    const newContact = new PhoneModel({ name, phone });
    try {
        const resp = await newContact.save();
        res.status(201).send({ message: "Contact Created", resp })
    } catch (error) {
        res.status(500).send(error);
    }

})

module.exports = router;