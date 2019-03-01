require('dotenv').config();
const express = require('express');
const app = express();
const ctrl = require('./controller');
const massive = require('massive');
const sessions = require('express-session');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json());
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 100000000000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database is Connected')
    app.listen(SERVER_PORT, ()=> console.log(`Listening on Port: 👀  ${SERVER_PORT} 👀`))
})

app.post('/auth/register', ctrl.register)

app.post('auth.login', ctrl.login)










