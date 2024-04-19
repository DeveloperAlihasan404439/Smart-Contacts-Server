const ContactsModal = require("../models/contacts");


exports.getContacts= async(req,res)=>{
    const result = await ContactsModal.find()
    res.send(result)
}
exports.getSingleContacts= async(req,res)=>{
    const filter = { _id: req.params.id };
      const result = await ContactsModal.findOne(filter);
      res.send(result);
}
exports.deleteContacts = async(req, res)=>{
    const id = req.query.id;
    const filter = {_id:  id}
    const result = await ContactsModal.deleteOne(filter)
    res.send(result)
}
exports.putContacts = async(req, res)=>{
    const filter = { _id: req.query.id };
      const contact = req.body;
      const updatedDoc = {
        $set: {
          name: contact.name,
          images: contact.images,
          email: contact.email,
          phone: contact.phone,
          address: contact.address,
          message: contact.message,
        },
      };
      const result = await ContactsModal.updateOne(filter, updatedDoc);
      res.send(result);
}

exports.postContacts = async(req, res)=>{
    const result = await ContactsModal.create(req.body)
    res.send(result)
}