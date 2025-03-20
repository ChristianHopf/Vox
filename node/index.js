const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const irc = require("irc");
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:4200"],
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
  let channels = [];
  let joinedChannels = [];

  socket.on("connect-to-server", ({ address, port, nick }) => {
    ircClient = new irc.Client(address, nick, {
      port: port || 6667,
      autoConnect: false,
    });

    socket.emit("status", `Connecting to ${address}:${port}...`);
    ircClient.connect();

    // Register event handlers
    ircClient.on("registered", () => {
      socket.emit("status", "Successfully registered on server");
      // ircClient.join("#testchannel");
      // ircClient.send('MODE', '#testchannel', '+P');
      ircClient.list();
    });

    ircClient.on("channellist_start", () => {
      channels = [];
    });

    ircClient.on("channellist_item", (channelInfo) => {
      channels.push(channelInfo);
    });

    ircClient.on("channellist", (channels) => {
      // console.log(channels);
      if (channels.length > 20) {
        socket.emit("channels", channels.slice(0, 21));
      } else {
        socket.emit("channels", channels);
      }
    });

    // ircClient.on("message", (msg) => {
    //   console.log("Received message: ", msg.rawCommand);
    //   socket.emit("message", msg);
    // });

    // ircClient.on("raw", (msg) => {
    //   // console.log(msg);
    // });

    ircClient.on("error", (err) => {
      socket.emit("status", `Error: ${err.message}`);
      console.error("Error: ", err);
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
