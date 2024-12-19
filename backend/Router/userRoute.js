const express=require('express')
const { registerUser, getUsers, getUser, deleteUser, updateUser } = require('../Controller/userController')

const userRoute=express.Router()


userRoute.post('/user',registerUser)

userRoute.get('/getusers',getUsers)

userRoute.get('/getuser/:id',getUser)

userRoute.delete('/delete/user/:id',deleteUser)

userRoute.patch('/updateUser/:id',updateUser)

module.exports=userRoute