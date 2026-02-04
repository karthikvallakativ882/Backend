import  exp from 'express'
//create min express (spearte router ) app
export const userApp = exp.Router();
 
//creating user empty array
 let users = []
  
 //Get users
  userApp.get("/users",(req,res)=>{
            res.status(200).json({message: "all users", payload:users});
        })

        userApp.post("/users",(req,res)=>{
            let newUser = req.body;
            users.push(newUser);
            res.status(201).json({message: "User Created ! "});
        })

//Adding users        
userApp.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const modifiedUser = req.body;
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return res.status(404).json({ message: "user not found" });
    users[idx] = { ...users[idx], ...modifiedUser, id };
    res.status(200).json({ message: "user Modified !", payload: users[idx] });
        })

//Getting user by id
userApp.get("/users/:id",(req, res)=>{
            let userId = Number(req.params.id);
            let user = users.find(user1=> user1.id === Number(userId));
            if(!user){
                return res.status(404).json({message: "User Not Found"});
            
            }
            res.status(200).json({message: "User",payload: user});
        })
       
        
 //updating user by id
 userApp.put('/users/:id', (req, res) => {
    let userId = req.params.id
    let modifiedUser = req.body

    let index = users.findIndex(user => user.id == userId)

    if (index !== -1) {
        users[index] = { ...users[index], ...modifiedUser }
        res.status(200).json({
            message: "User updated successfully",
            payload: users[index]
        })
    } else {
        res.status(404).json({
            message: "User not found"
        })
    }
})       

  //Deleting user      
     userApp.delete("/users/:id",( req, res )=>{
    let userId = Number(req.params.id);
    let idx = users.findIndex(userobj => userobj.id === userId); // Find the index of the user
    console.log(userId);
    if (idx === -1) {
        return res.status(404).json({message: "User Not Found!"});
    }
    let deletedUser = users.splice(idx, 1); // Use the index to splice
    res.status(200).json({message: "User Deleted!", payload: deletedUser});
})
