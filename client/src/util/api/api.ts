import { io, Socket } from "socket.io-client";

interface Config {
  address: string;
  port: number;
  nick: string;
}

const url = "http://localhost:3000";
let socket: Socket | null = null;

export function connectToServer(config: Config) {
  socket = io(url);

  socket.emit("connect-to-server", config);
}
