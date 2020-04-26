const mUsuarios = require('../model/muser');
const usuarioController ={}
usuarioController.getUsuarios= async (req,res)=>{
    const usuarios = await mUsuarios.find();
    res.json(usuarios);

}
usuarioController.createtUsuario= async (req,res)=>{
    const {nombre,address, address_conf,email,telefono,apellido}=(req.body);
    const errors = [];
    const guardado = [];
    if(address != address_conf)
    {
        errors.push({ text: ' la contraseña no coinide' });
    }
    if (!nombre) {
        errors.push({ text: 'El campo Nombre no puede estar vacio' });
    }
    if(!address_conf){
        errors.push({ text: 'El campo address no puede estar vacio' });
    }
    if(address_conf.length<4){
        errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos' });        
    }
    if(address.length<4  ){
        errors.push({ text: 'la contraseña tiene que se mayor a 4 digitos' });        
    }
    if (!address ) {
        errors.push({ text: 'El campo address no puede estar vacio' });
    } 
    if (!email) {
        errors.push({ text: 'El campo email no puede estar vacio' });
    } 
    if (!telefono) {
        errors.push({ text: 'El campo telefono no puede estar vacio' });
    }
    if (!apellido) {
        errors.push({ text: 'El campo apellido no puede estar vacio' });
    }
    if (errors.length > 0) {
        console.log({
            errors,
        });
    } else {
        guardado.push({ text: 'Datos de usuario guardados' });
    const usuario =new mUsuarios({nombre,address,email,telefono,apellido});
    await usuario.save();
    console.log(usuario);
    res.json(usuario); 
    }
}
usuarioController.getUsuario= async (req,res)=>{
const usuario =await mUsuarios.findById(req.params.id);
res.json(usuario);
}
usuarioController.editUsuario= async (req,res)=>{
    const {nombre,address,email,telefono,apellido} = req.body;
   const usuario =  await mUsuarios.findByIdAndUpdate(req.params.id, {nombre,address,email,telefono,apellido},{new:true});
   res.json(usuario);
 
}
usuarioController.deleteUsuario = async  (req,res)=>{
     const usuario= await mUsuarios.findByIdAndDelete(req.params.id)
    res.json(usuario); 
}
module.exports=usuarioController;