const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const irc = require("irc");
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

/**
 * On connection, register socket event handlers
 * - connect-to-server: Create IRC client and register IRC event handlers:
 *    - connect
 *    - on "registered"
 *    - on "message"
 *    - on "error"
 * - message: When client sends a message, send it to the appropriate channel
 * - disconnect: When the client is disconnected, clean up and log
 */
io.on("connection", (socket) => {
  console.log("Client connected to:", socket.id);
  let ircClient = null;

  socket.on("connect-to-server", ({ server: address, port, nick }) => {
    ircClient = new irc.Client(address, nick, {
      port: port || 6667,
      autoConnect: false,
    });

    // On connect, emit successful connect
    ircClient.connect(() => {
      socket.emit("status", "Connected to server");
    });

    // On registered, emit successfully registered
    ircClient.on("registered", () => {
      socket.emit("status", "Successfully registered on server");
    });

    // On receiving a message, emit it to the appropriate channel
    ircClient.on("message", (from, to, message) => {
      socket.emit("message", {
        from,
        message,
        channel: to,
      });
    });

    // On error err, emit err
    ircClient.on("error", (err) => {
      socket.emit("error", err);
    });
  });

  socket.on("send-message", ({ channel, message }) => {
    if (ircClient) {
      ircClient.say(channel, message);
    }
  });

  // On disconnect from frontend, clean up
  socket.on("disconnect", () => {
    if (ircClient) {
      ircClient.disconnect("Client disconnected");
    }
    console.log("Client disconnected from:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
