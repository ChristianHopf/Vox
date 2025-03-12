import { io, Socket } from "socket.io-client";

interface Config {
  address: string;
  port: number;
  nick: string;
}

const url = "http://localhost:3000";
let socket: Socket | null = null;

export function handleReceiveStatus(status: string){
  console.log("Received status: ", status);
}

export function connectToServer(config: Config) {
  socket = io(url);

  socket.on("connect", () => {
    console.log("Connected with socket id: ", socket.id);
  });

  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });

  socket.on("status", handleReceiveStatus);

  socket.on("message", (msg) => {
    console.log(msg);
  })

  socket.emit("connect-to-server", config);
}
