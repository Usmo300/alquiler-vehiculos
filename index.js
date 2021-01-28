
const port = 6000;
const app = require('./server');
require('./conexion');



app.listen(port, console.log(`Escuchando el puerto: ${port}`));

