const express = require('express');
const getNotes=require('../controllers/c.js');
const router=express.Router();
router.get('/notes',getNotes.getNotes);
module.exports=router;