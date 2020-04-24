const mUsuarios = require('../model/muser');
const usuarioController ={}
usuarioController.getUsuario= async (req,res)=>{
    const usuarios = await mUsuarios.find();
    res.json(usuarios);

}
usuarioController.createtUsuario= async (req,res)=>{
    const usuario =new mUsuarios(req.body);
    await usuario.save();
    console.log(usuario);
    res.json(usuario); 
    
}

usuarioController.editUsuario=(req,res)=>{
    res.send("put usuario");   
}
usuarioController.deleteUsuario=(req,res)=>{
    res.send("delete usuario");   
}
module.exports=usuarioController;