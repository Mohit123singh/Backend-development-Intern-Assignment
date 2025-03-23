const express=require('express');
const dotenv=require('dotenv').config()
const colors=require('colors')
const connectDb=require('./config/db.js')
const userRoutes=require('./routes/userRoutes.js')
const notFound=require('./middleware/notFound.js');
const {errorHandler}=require('./middleware/errorMiddleware')
connectDb();

const app=express();
const PORT=process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended:false}))




app.use('/api/users',userRoutes);

app.use(notFound)
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
})