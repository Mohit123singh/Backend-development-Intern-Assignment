const express=require('express');
const router=express.Router();
const {createuser,getAllUsers,getUser,updateUser,deleteUser}=require('../controllers.js/userController.js')

router.route('/').post(createuser).get(getAllUsers);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);


module.exports=router;