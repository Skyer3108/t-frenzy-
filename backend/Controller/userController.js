const validator=require('validator')
const userSchema=require('../Schema/userSchema')


const registerUser=async(req,res)=>{

    const {name,email,age}=req.body

    try{

        const isExists=await userSchema.findOne({email})


        if(isExists){
            return res.send({
                status:400,
                message:'Email already Exists'
            })
          }
        
          if(!validator.isEmail(email)){
            return res.send({
               status:400,
               sucess:false,
               message:'Please enter a valid email'
           })
        }


        const userData=new userSchema({
            name,
            email,
            age
        })

        const db=await userData.save()

        res.send({
            status:200,
            message:'Registration Sucessfully'
        })

    }catch(err){


        res.send({
            status:400,
            message:`Register Error ${err.message}`
        })
    }

}


const getUsers=async(req,res)=>{


    try{

        const userData=await userSchema.find();



        res.send({
            status:200,
            message:'Users Data Get Sucessfully',
            data:userData
        })

    }catch(err){
        res.send({
            status:400,
            error:`Error geting UserData ${err.message}`
        })
    }
}


const getUser=async(req,res)=>{

    const {id}=req.params;

    try{

        const singleUser=await userSchema.findById({_id:id});



        res.send({
            status:200,
            message:'User Data Get Sucessfully',
            data:singleUser
        })

    }catch(err){
        res.send({
            status:400,
            error:`Error geting UserData ${err.message}`
        })
    }

}


const deleteUser=async(req,res)=>{

    const {id}=req.params;

    try{

        const singleUser=await userSchema.findByIdAndDelete({_id:id});

        res.send({
            status:200,
            message:'User Deleted Sucessfully',
           
        })

    }catch(err){
        res.send({
            status:400,
            error:`Error geting UserData ${err.message}`
        })
    }

}


const updateUser=async(req,res)=>{

    const {id}=req.params;

    const {name,email,age}=req.body
    try{

        const updateUser=await userSchema.findByIdAndUpdate(id,req.body,{new:true});

        res.send({
            status:200,
            message:'User Updated Sucessfully',
           updatedUser:updateUser
        })

    }catch(err){
        res.send({
            status:400,
            error:`Error geting UserData ${err.message}`
        })
    }

}
module.exports={registerUser,getUsers,getUser,deleteUser,updateUser}