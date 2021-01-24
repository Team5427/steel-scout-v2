const express = require('express')            //Express HTTP Server
const session = require('express-session')    //Session Management
const cookieParser = require('cookie-parser') //Session cookie reading
const bodyParser = require('body-parser')     //HTTP -> JSON
const passport = require("passport")          //Auth lib
const cors = require('cors')                  //TODO: Handle cross-origin requests
const morgan = require('morgan')              //Logger

const {Sequelize} = require('sequelize') //ORM for MySQL

require('dotenv').config(); //Initialize environment vars


// ----------------------- END IMPORTS ----------------------- \\


//Initializes express application
const app = express();
const port = process.env.PORT || 5000;

//Initialize MySQL ORM
//TODO switch to env connection vars
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, { // db, u, p
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
        timestamps: false
    }
})

//Parse JSON from HTTP
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

//Log HTTP Requests in console
app.use(morgan('dev'))

app.use(
    cors()
);
// ----------------------- END MIDDLEWARE ----------------------- \\


const compRoute = require('./routes/competitions')(sequelize); //Competitions reqs routed to routes/auth.js
app.use('/competitions', compRoute)

const pitScoutingRoute = require('./routes/pitscouting')(sequelize); //Pit Scouting reqs routed to routes/auth.js
app.use('/pitscouting', pitScoutingRoute)

const seasonsRoute = require('./routes/seasons')(sequelize); //Pit Scouting reqs routed to routes/auth.js
app.use('/seasons', seasonsRoute)

const teamsRoute = require('./routes/teams')(sequelize); //Pit Scouting reqs routed to routes/auth.js
app.use('/teams', teamsRoute)

const scoutingRoute = require('./routes/scouting')(sequelize); //Pit Scouting reqs routed to routes/auth.js
app.use('/scouting', scoutingRoute)


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
    console.log(`Server listening on port ${port}!`)
});