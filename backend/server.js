const express = require('express');
const app = express();
require('./config/dbConnect')(); //dbConnect


//routes
//user's routes
//register
app.post('/api/users/register',(req,res)=>{
    res.send('Register route');
});
//login
app.post('/api/users/login',(req,res)=>{
    res.send('login route');
});
//update user
app.put('/api/users/update',(req,res)=>{
    res.send('update route');
});
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