const express = require('express');
const session = require("express-session");
const passport = require('passport');
require('./auth');

function isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401);
}

const app = express();
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

const socketIO = require('socket.io');
const http = require('http');
const server = http.createServer(app)
const io = socketIO(server);

//Sockets
require('./socket')(io);

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json());

//Mis rutas

app.use(express.static('public')) 

app.get('/', (req, res) => {
    res.render('index');
})

const eventos = require('./routes/eventos')
app.use(eventos)

const rutas = require('./routes/rutas')
app.use(rutas)

const competencias = require('./routes/competencias');
app.use(competencias)

const bicicletas = require('./routes/bicicletas');
app.use(bicicletas)

// Auth google

app.get('/home', isLoggedIn, (req, res) => {

    if(`${req.user.displayName}` == "Esteban José C.O"){
        res.render('admin/home', {user:`${req.user.displayName}`});
    }else{
        res.render('customer/home', {user:`${req.user.displayName}`});
    }
    
})

app.get('/login', (req, res) => {
    req.logout();
    res.render('login');
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/home',
        failureRedirect: '/auth/failure',
    })
);

app.get('/auth/failure', (req, res) => {
 res.send('something went wrong..');
});

server.listen(3000, ()=>{
    console.log('¡Server UP! en http://localhost:3000')
})