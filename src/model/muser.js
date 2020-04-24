const mongoose =require('mongoose');
const {Schema} =mongoose;
const mUsuarioShema =Schema({
    nombre:{type:String,require:true},
    address:{type:String,require:true},
    email:{type:String,require:true},
    telefono:{type:String,require:true},
    apellido:{type:String,require:true}
});
module.exports=mongoose.model('mUsuarios',mUsuarioShema);