import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async(req, res)=>{
    // console.log(req.body);
    const { username, email, password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);

    if(!username || !email || !password || username === '' || email === '' || password === '' ){
        return res.status(400).json({message: 'Tous les champs sont obligatoires'});
    }

    const newUser = new User(
        {
            username,
            email,
            password: hashPassword,
        });
    try {
        await newUser.save();    
    } catch (error) {
        res.status(500).json({message: error.message});
    }

    
    res.json({message:'Inscription reussi!!!!!'});
}