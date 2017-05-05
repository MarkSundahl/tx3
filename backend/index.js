var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Game = require('./game.js');

var g1 = new Game();

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('update', g1.game);
  socket.on('move', (num) => {
    console.log('move: ' + num);
    g1.makeMove(num);
    console.log(g1.game.next);
  	io.emit('update', g1.game);
  });
  socket.on('new game', () => {
    console.log('New game');
    g1 = new Game();
    io.emit('update', g1.game);
    console.log(g1.game.next);
  });
});

app.use(express.static('static'));

http.listen(3300, function(){
  console.log('listening on *:3300');
});