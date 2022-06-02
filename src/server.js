//-----------------------------REQUIRE---------------------//

require('express-async-errors');
const sqliteConnection = require('./database/knex')
const AppError = require('./utils/AppError')
const express = require('express');
const routes = require('./routes')
sqliteConnection()
const app = express();
app.use(express.json());


//-----------------------------INIT------------------------//

app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError){
        
    return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
    });
}
    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
});



//-----------------------------PORT------------------------//
const PORT = 3333;
app.listen(PORT, () => {console.log(`Express is runing on PORT ${PORT}`)})

