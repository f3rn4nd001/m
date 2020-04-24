const mongoose =require('mongoose');
const {Schema} =mongoose;
const ModelNotasShema =Schema({
    nombre:{type:String,require:true},
    nota:{type:String,require:true},
    imagen:{type:String,require:true},
    
});
module.exports=mongoose.model('Modelnotas',ModelNotasShema);