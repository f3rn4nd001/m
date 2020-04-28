const Modelnotas = require('../model/notasModel');
const NotasController ={}

NotasController.getNotas= async (req,res)=>{
    const notas = await Modelnotas.find().sort({ nombre: 'desc' });
    res.json(notas);

}

NotasController.createtNotas= async (req,res)=>{
    const {nombre,nota,imagen}=(req.body);
    const errors = [];
    const guardado = [];
    if (!nombre) {
        errors.push({ text: 'El campo Nombre no puede estar vacio' });
    }
    if (!nota) {
        errors.push({ text: 'El campo Nombre no puede estar vacio' });
    }
    if (!imagen) {
        errors.push({ text: 'El campo Nombre no puede estar vacio' });
    }
    if (errors.length > 0) {
        console.log({
            errors,
        });
    } else {
        console.log({ text: 'Datos de usuario guardados' });
    const notas =new Modelnotas({nombre,nota,imagen});
    await notas.save();
    console.log(notas);
    res.json(notas); 
    }
}


NotasController.putNotas= async (req,res)=>{
    const {_id, nombre, nota, imagen } = req.body;
     await Modelnotas.findByIdAndUpdate(req.body._id, { nombre, nota, imagen });
    console.log({_id,nombre, nota, imagen});
    }
NotasController.deleteNotas= async (req,res)=>{
    const  {id } = req.body;
    console.log({id});      
    await Modelnotas.findByIdAndDelete(req.body.id);
    }
NotasController.getNota= async (req,res)=>{
        const nota =await Modelnotas.findById(req.params.id);
        res.json(nota);
        }
module.exports=NotasController;