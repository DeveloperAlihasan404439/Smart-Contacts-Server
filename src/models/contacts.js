const  mongoose=require('mongoose');
const ContactsSchema =mongoose.Schema({
    name: {type: String},
    email: {type: String},
    images: {type: String},
    phone: {type: String},
    address: {type: String},
    message: {type: String},
});
const ContactsModal = mongoose.model('contacts', ContactsSchema)
module.exports = ContactsModal