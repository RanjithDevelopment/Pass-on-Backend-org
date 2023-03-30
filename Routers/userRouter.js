<<<<<<< HEAD
const express = require('express');
const usermodule = require("../Modules/usermodule.js")
const Auth = require("../Modules/Authmodule.js");
const router=express.Router();
router.get('/get',Auth.authorizeAdmin,usermodule.getUserData);
router.delete('/delete/:id',Auth.authorizeAdmin,usermodule.deleteuserdata);
=======
const express = require('express');
const usermodule = require("../Modules/usermodule.js")
const Auth = require("../Modules/Authmodule.js");
const router=express.Router();
router.post('/get',usermodule.getUserData);
router.post('/delete/:id',usermodule.deleteuserdata);
>>>>>>> a494ab484efe688beaa0a1c67ce4900223c335a5
module.exports=router;