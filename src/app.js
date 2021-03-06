const expres =require('express');
const morgan =require('morgan');
const session =require('express-session');
const cors =require('cors');
const app=expres();


const {mongoose} =require('./database');

app.set('port',process.env.PORT||3000);

app.use(morgan('dev'));
app.use(expres.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use(session({
    secret:'ldskaldklsa',
    resave:true,
    saveUninitialized:true
}));

//ROUTES
app.use('/api/login' ,require('./routes/ruser'));
app.use('/api/notas' ,require('./routes/notasRutas'));


app.listen(app.get('port'),()=>{
    console.log("servidor en el puerto",app.get('port'));
});