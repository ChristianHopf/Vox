import { io, Socket } from "socket.io-client";

interface Config {
  address: string;
  port: number;
  nick: string;
}

const url = "http://localhost:3000";
let socket: Socket | null = null;

export function connectToServer(config: Config, onReceiveStatus: (status: string) => void) {
  socket = io(url);

  socket.on("status", onReceiveStatus);

  socket.emit("connect-to-server", config);
}
