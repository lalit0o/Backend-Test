const express= require('express');
const router = express.Router();

let data = require('./data');


router.post('/createUser',(req,res)=>{
    data.push(req.body);
    res.json({mensaje:"Datos agregados"},req.body)
});


router.get('/getUsers',(req,res)=>{
    res.json(data);
});

router.patch('/updateUser/:id',(req,res)=>{

    const id=req.params.id;
    const index=data.findIndex(u=>u.id==id);

    if(index==-1)
    {
        res.status(401).json({mensaje:"El usuario no ha sido encontrado"});
    }

    let user=data[index];

    if(req.body.name) user.nombre=req.body.nombre;

    if(req.body.userId) user.userId=req.body.userId;
    if(req.body.email) user.email = req.body.email;

    res.json({mensaje:"Datos actualizados"},user);
});


router.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;

    const index= data.findIndex(u=>u.id==id);
    if(index==-1)
    {
        res.status(401).json({mensaje:"Usuario no encontrado"});
    }

    data.splice(index,1);
    res.json({mensaje:"Usuario eliminado exitosamente"});
    
})

module.exports= router;