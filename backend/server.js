const express = require('express');
const app = express();
const usersRoute = require('./routes/usersRoute');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewareHandler');
const bookRouter = require('./routes/booksRoutes');
dotenv.config();
require('./config/dbConnect')(); //dbConnect



// passing body data
app.use(express.json());

//routes
//users routes
app.use('/api/users',usersRoute); 

//book routes
app.use('/api/books',bookRouter);

// console.log(process.env.JWT_SECRET_KEY);

//error middleware
app.use(error.errorMiddlewareHandler);


//Server 
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})