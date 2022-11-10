const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.json({
        message: 'Hola castillo'
    })
})


app.get('/Origami', (req, res)=> {
    res.json({
        data: 'Hola castillo'
    })
})

app.listen(4500) () =>{
    
    console.log('server ok');
};