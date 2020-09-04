const express = require('express');
const { query } = require('express');
const app = express();
app.get('/', (req, res) => {
    const nombre = req.query.nombre;
    if(nombre){        
        res.send(`<h1>Hola ${nombre}!</h1>`);
    }else{
        res.send(`<h1>Hola desconocido!</h1>`); 
    }    
});
app.listen(3000, () => console.log('Listening on port 3000!'));




// if(req.query.name){
        
//     res.send(`<h1>hola ${req.query.name}!</h1>`);
//     console.log
// }else{
//     res.send(`<h1>hola desconocido</h1>`); 
// }

// });
// const nombre = req.query.nombre;