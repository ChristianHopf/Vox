import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Server, AppState } from '../types/server';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  private stateSubject = new BehaviorSubject<AppState>({
    connectedServer: null,
    servers: [],
  });

  state$ = this.stateSubject.asObservable();

  registerServer(name: string, nick: string, channels: string[]): void {
    const server: Server = { name, nick, channels, connected: true };
    localStorage.setItem('servers', JSON.stringify([server]));

    this.stateSubject.next({
      connectedServer: server,
      servers: [server],
    });
  }
}
