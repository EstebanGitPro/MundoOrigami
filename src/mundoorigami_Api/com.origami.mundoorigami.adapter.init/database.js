const express = require('express');
const mongoose = require('mongoose');
const models = require('../../mundoorigami_Api/com.origami.mundoorigami.adapter.init');

const app = express();

app.get('/', (req, res)=> {

    let data = {
        nombre: 'Campana',
        tipoOrigami : 'Modular'
      }
      new models (data).save( (err, result)=>{
        console.log(err);
        console.log (result);
      });
      

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