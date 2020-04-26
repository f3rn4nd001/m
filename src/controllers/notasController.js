const Modelnotas = require('../model/notasModel');
const NotasController ={}

NotasController.getNotas= async (req,res)=>{
    const notas = await Modelnotas.find();
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
    const { nombre, nota, imagen } = req.body;
    await Modelnotas.findByIdAndUpdate(req.body.id, { nombre, nota, imagen });
    console.log(nota)
    }
    NotasController.deleteNotas= async (req,res)=>{
      const nota = await Modelnotas.findByIdAndDelete(req.body.id);
        console.log(nota);
    }
module.exports=NotasController;