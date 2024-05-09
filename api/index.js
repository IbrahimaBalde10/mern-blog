import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import userRouter from '../api/routes/user.route.js';
import authRouter from '../api/routes/auth.route.js';

// Cluster0
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connexion à la base de données reussi!');
}).catch(err =>{
    console.log(err);
});


const app = express();
 app.use(express.json());
app.listen(3000, ()=>{
    console.log('Le serveur est demaré au port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Erreu du serveur';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
})