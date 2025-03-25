import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { StateService } from './state.service';

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

  constructor(private stateService: StateService) {}

  private handleReceiveStatus(status: string) {
    console.log('Received status: ', status);
    // On register success, close modal
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

    this.socket.on('registration', () => {
      // Trigger modal close somehow
      console.log("Successfully registered on server");
    });

    this.socket.on('status', this.handleReceiveStatus);

    this.socket.on('message', (msg) => {
      console.log(msg);
    });

    this.socket.on('channels', (channels) => {
      console.log(channels);
      this.stateService.registerServer(config.address, config.nick, channels);
    });

    this.socket.emit('connect-to-server', config);
  }
}
