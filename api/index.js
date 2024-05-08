import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import userRouter from '../api/routes/user.route.js';
// Cluster0
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connexion à la base de données reussi!');
}).catch(err =>{
    console.log(err);
});


const app = express();

app.listen(3000, ()=>{
    console.log('Le serveur est demaré au port 3000!');
});

app.use('/api/user', userRouter);