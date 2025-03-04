const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const irc = require('irc');
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('User connected');
  
  // socket.on('chat-message', (msg) => {
  //   io.emit('Chat message: ', msg);
  // });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


server.listen(3000, () => {
  console.log("Listening on port 3000");
})
