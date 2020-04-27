
const express  = require('express');
const router = express.Router();


router.get('/', (req,res) => {
   
    res.render('index.html', { title: 'La pagina de rolf' });

});

router.get('/Login', (req,res) => {
   
    res.render('Login.html', { title: 'Login' });

});

router.get('/quiz', (req,res) => {
   
    res.render('quiz.html', { title: 'Quiz Page' });

});

module.exports = router;
