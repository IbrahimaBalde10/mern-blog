import express from 'express';

const app = express();

app.listen(3000, ()=>{
    console.log('Le serveur est demaré au port 3000!');
})