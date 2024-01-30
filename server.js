// DEPENDENCIES
const express = require('express')
const Sequelize = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Sequilize connection
// const sequelize = new Sequelize({storage: process.env.PG_URI,
//     dialect: 'postgres',
//     username: process.env.PG_USERNAME,
//     password: process.env.PG_PASSWORD
// }) 

// try {
//     sequelize.authenticate()
//     console.log('Connection has been established successfully.')
// } catch (error) {
//     console.error('Unable to connect to the database:', error)
// }

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//CONTROLLERS
const bandsController = require('./controllers/bands_controller')
const stagesController = require('./controllers/stage_controller');
const eventsController = require('./controllers/event_controller');

app.use('/bands', bandsController)
app.use('/stages', stagesController); // Use the stages controller
app.use('/events', eventsController); // Use the events controller

// LISTEN
app.listen(process.env.PORT || 4000, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})