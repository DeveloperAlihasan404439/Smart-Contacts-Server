const express =require('express');
const { getContacts, postContacts, deleteContacts, putContacts, getSingleContacts } = require('../controllers/ContactsController');


const router =express.Router();

// subject

// Reviews Manage Api Router
router.get("/contacts",getContacts );
router.get("/contacts/:id",getSingleContacts );
router.delete("/contacts/:id",deleteContacts );
router.put("/contacts",putContacts );
router.post("/contacts",postContacts );



module.exports=router;







































module.exports=router;