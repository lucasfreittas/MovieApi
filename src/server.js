//-----------------------------REQUIRE---------------------//

const express = require('express');
const sqliteConnection = require('./database/knex')
const routes = require('./routes')
const app = express();
app.use(express.json());


//-----------------------------INIT------------------------//
sqliteConnection()
app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError){
        
    return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
    });
}
    console.error(error.message);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
});



//-----------------------------PORT------------------------//
const PORT = 3333;
app.listen(PORT, () => {console.log(`Express is runing on PORT ${PORT}`)})