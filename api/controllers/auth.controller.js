import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req, res, next)=>{
    // console.log(req.body);
    const { username, email, password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);

    if(!username || !email || !password || username === '' || email === '' || password === '' ){
       next(errorHandler(400, 'Tous les champs sont obligatoires'));
        // return res.status(400).json({message: 'Tous les champs sont obligatoires'});
    }

    const newUser = new User(
        {
            username,
            email,
            password: hashPassword,
        });
    try {
        await newUser.save();   
        res.json({message:'Inscription reussi!!!!!'}); 
    } catch (error) {
        // res.status(500).json({message: error.message});
        next(error);
    }
};