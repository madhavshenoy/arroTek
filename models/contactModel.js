const mongoose = require("mongoose");

const contactSchema = {
    firstName: String, 
    lastName: String, 
    email: String, 
    phoneNumber: String
}

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;