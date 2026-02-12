// User API
import exp from 'express'
import { UserModel } from '../MODEL/UserModel.js';
export const userApp = exp.Router(); 
// Read All Users
userApp.get('/users',async (req,res)=>{
    let userlist = await UserModel.find()
    res.status(200).json({message:"This Data is from DataBase",payload:userlist})
});
// Read User by Id
userApp.get('/users/:id',async(req,res)=>{
    let userId = req.params.id;
     console.log(req.params)
    let userObj = await UserModel.findById(userId)
    res.status(200).json({message:"user",payload:userObj})
})
// Create a User
userApp.post('/users',async(req,res)=>{
    let newUser = req.body;

    let newUserDoc = new UserModel(newUser)

    await newUserDoc.save()
    res.status(200).json({message:"User Created!"})
})

// Update user
userApp.put('/users/:id',async(req,res)=>{
    // extracting 
    let objId = req.params.id;

    let modifiedUser = req.body;

    let latestUser = await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser},},{new :true});

    res.status(200).json({message:"user modified",payload:latestUser})

})


// Delete user by id
userApp.delete('/products/:id',async(req,res)=>{
     let  objId = req.params.id;
     let  deletedUser = await UserModel.findByIdAndDelete(objId)
     res.status(200).json({message:"User Deleted !",payload:deletedUser})

})