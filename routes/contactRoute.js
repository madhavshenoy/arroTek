const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

router.route("/create").post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const newContact = new Contact({
        firstName,
        lastName,
        email,
        phoneNumber
    });

    newContact.save();
});

router.route("/create").get((req, res) => {
    Contact.find()
        .then(foundContacts => res.json(foundContacts))
})

module.exports = router; 