import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

interface Config {
  address: string;
  port: number;
  nick: string;
}

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private readonly url = 'http://localhost:3000';
  private socket: Socket | null = null;

  constructor() {}

  private handleReceiveStatus(status: string) {
    console.log('Received status: ', status);
  }

  connectToServer(config: Config) {
    console.log('Opening socket');
    this.socket = io(this.url);

    this.socket.on('connect', () => {
      console.log('Connected with socket id: ', this.socket?.id);
    });

    this.socket.on('disconnect', () => {
      console.log(this.socket?.id); // undefined
    });

    this.socket.on('status', this.handleReceiveStatus);

    this.socket.on('message', (msg) => {
      console.log(msg);
    });

    this.socket.on('channels', (channels) => {
      console.log(channels);
    });

    this.socket.emit('connect-to-server', config);
  }
}
