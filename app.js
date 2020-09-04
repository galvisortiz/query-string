const express = require('express');
const { query } = require('express');
const app = express();

app.get('/', (req, res) => {
    if(req.query.name){
        res.send('hola ' + req.query.nombre);
    }else{
        res.send("Hola desconocido!");  
    }
    
});

app.listen(3000, () => console.log('Listening on port 3000!'));
