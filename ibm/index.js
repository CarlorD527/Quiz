const express = require ('express');
const app = express();
const path = require ('path');


//Configuraciones de express
app.set('port' , 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');


//middlewares



//routes
app.use(require('./routes/index'));


//servidor escuchando
app.get('/', (req,res) => {
   
    res.render('index', {title: 'La pagina de rodolfo'});

});

// static files 
app.use(express.static(path.join(__dirname, 'public')))


// Escuchando el servidor 
app.listen(app.get('port'),() => {
    console.log('Servidor en puerto ', app.get('port'));
});

console.log('Servidor escuchando! ! ! gaa ');

