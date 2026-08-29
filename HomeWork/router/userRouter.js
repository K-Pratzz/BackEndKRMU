const express =require('express');
const router=express.Router();

const userController=require('../controller/userController');

router.get('/',userController.getAllUsers);
router.get('/:roll',userController.getUserByRoll);
router.post('/',userController.createUser);
router.put('/:roll',userController.updateUser);
router.delete('/:roll',userController.deleteUser);

module.exports=router;