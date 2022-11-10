const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res)=> {
    res.json({
        message: 'Hola castillo'
    })
})


app.get('/Origami', (req, res)=> {
    data : 
    nombre : "Campana"
    
})

mongoose.connect('mongodb://localhost/ProyectoExtraclase',{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{'Mongoo Ok'});

app.listen(4500, () => {
    console.log('Server Ok')
});