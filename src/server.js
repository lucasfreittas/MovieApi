//-----------------------------REQUIRE---------------------//

const express = require('express');
const sqliteConnection = require('./database/knex')
const app = express();
app.use(express.json());


//-----------------------------INIT------------------------//
sqliteConnection()




//-----------------------------PORT------------------------//
const PORT = 3333;
app.listen(PORT, () => {console.log(`Express is runing on PORT ${PORT}`)})