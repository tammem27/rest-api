const express =require ('express') ;
require('dotenv').config({path:'./config/.env'});
const ConnectDB = require('./config/ConnectDB');
const User = require('./models/User');


const app =express();
app.use(express.json());
ConnectDB();
//CRUD
//post,put,delete,update

//add users to the database

app.post('/users/add',async(req,res)=>{
 const {name,email,phone}=req.body;
 const newUser =new User({name,email,phone});
 try {
     let user=await newUser.save();
     res.send(user)
 } catch (error) {
     res.send(error)
     
 }
})

// get all users from the database 
app.get("/users/get", async (req,res)=>{
try {
   let users = await User.find()
   res.send(users); 
} catch (error) {
    res.send(error);
}
});

//get a single user
app.get("/users/get/:userID",async(req,res)=>{
    try {
        let user = await User.findById(req.params.userID);
        res.send(user);
    } catch (error) {
        res.send(error);
        
    }
});

//edit a user 
app.put("/users/edit/:userID",async(req,res)=>{
    try {
        let editedUser = await User.findByIdAndUpdate(
            req.params.userID,
            {...req.body},
            {new:true}
        );
        res.send(editedUser);
    } catch (error) {
        res.send(error);    
    }
});

// delete a user
app.delete("/users/delete/:userID",async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.userID)
        res.send({msg:"user successfully deleted"});
    } catch (error) {
        res.send(error);
    }
})



const PORT = process.env.PORT || 8000 ;

app.listen(PORT, (error=> error? console.error(error):console.log(`server is running on port ${PORT}`)) );

