const Modelnotas = require('../model/notasModel');
const NotasController ={}

NotasController.getNotas= async (req,res)=>{
    const notas = await Modelnotas.find();
    res.json(notas);

}

NotasController.createtNotas= async (req,res)=>{
    const notas =new Modelnotas(req.body);
    await notas.save();
    console.log(notas);
    res.json(notas); 
    
}

module.exports=NotasController;