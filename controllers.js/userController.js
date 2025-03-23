const asyncHandler=require('express-async-handler')
const User=require('../models/userModel.js');

// @desc Create new user
// @route POST/api/users

const createuser=asyncHandler(async(req,res)=>{

    const {name,email,age}=req.body;
    if(!name || !email || !age)
    {
        res.status(404);
        throw new Error('Please add all the fields');
    }

    // check if user exists 
    const userExists=await User.findOne({email});

    if(userExists)
    {
        res.status(400);
        throw new Error('User Already Exists')
    }
    const user=await User.create({
        name,
        email,
        age,
    })

    if(user)
    {
        res.status(201);
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            age:user.age
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid user data')
    }
})

// @desc Get users
// @route GET/api/users


const getAllUsers=asyncHandler(async(req,res)=>{
    const users=await User.find()
    res.status(200).json(users)
})

// @desc Get user By Id
// @route GET/api/users/:id


const getUser=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('User not found')
    }
    res.status(200).json(user)
    
})

// @desc Update user
// @route PUT/api/users/:id


const updateUser=asyncHandler(async(req,res)=>{

    const user=await User.findById(req.params.id);

    // check for the user
    if(!user)
    {
        res.status(400);
        throw new Error('User not Found')
    }
    const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{
        new :true,
    })
    res.status(200).json(updatedUser)

})

// @desc delete user
// @route DELETE/api/users/:id


const deleteUser=asyncHandler(async(req,res)=>{

    const user=await User.findById(req.params.id);

    // check for the user
    if(!user)
    {
        res.status(400);
        throw new Error('User not Found')
    }

    await User.findByIdAndDelete(req.params.id)
    res.status(200).json(req.params.id)
    res.status(200).json({message:`Deleted user ${req.params.id}`})

})




module.exports={
    createuser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
}