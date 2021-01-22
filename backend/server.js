const express = require('express');
const User = require('./models/User');
const app = express();
const mongoose = require('mongoose');
require('./config/dbConnect')(); //dbConnect
// passing body data
app.use(express.json());

//routes
//users routes
 
//register
app.post('/api/users/register',async (req,res)=>{
    try{
        const { name, email,password } = req.body;
        const user = User.create({name,email,password});
        
    }catch(error){

    }
});

//login
app.post('/api/users/login',(req,res)=>{
    res.send('login route');
});

//update user
app.put('/api/users/update',(req,res)=>{
    res.send('update route');
});

//delete user 
app.delete('/api/users/:id',(req,res)=>{
    res.send('Delete route');
});

//fetch Users
app.get('/api/users',(req,res)=>{
    res.send('Fetch users');
});

//Server 
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})