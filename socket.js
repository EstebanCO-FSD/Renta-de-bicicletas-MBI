module.exports =  io => {
    io.on('connection', (socket) =>{
        console.log('Nuevo usuario conectado');

        socket.on('userCoords', coords =>{
            socket.broadcast.emit('newUserCoords', coords);
        });
    });
}