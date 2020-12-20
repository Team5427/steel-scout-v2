const express = require('express') //Express HTTP Server
const session = require('express-session') //Session Management
const cookieParser = require('cookie-parser') //Session cookie reading
const bodyParser = require('body-parser') //HTTP -> JSON
const passport = require("passport") //Auth lib
const morgan = require('morgan') //Logger
const cors = require('cors') // TODO: Handle cross-origin requests

require('dotenv').config(); //Initialize environment vars


// ----------------------- END IMPORTS ----------------------- \\


//Initializes express application
const app = express();
const port = process.env.PORT || 5000;

//Parse JSON from HTTP
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

//Log HTTP Requests in console
app.use(morgan('dev'))


// ----------------------- END MIDDLEWARE ----------------------- \\


const exRoute = require('./routes/ex')(sequelize); //Authentication reqs routed to routes/auth.js
app.use('/ex', authRoute)



// ----------------------- END ROUTING ----------------------- \\


app.use((err, req, res, next) => { //Error logging
    console.error(err)
    next();
})

app.listen(port, async () => { //Starts server & connects to MySQL DB
    try {
        await sequelize.authenticate();
        console.log('MySQL Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`Server listening on port ${port}`)
});