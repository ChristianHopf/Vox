import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Server, AppState } from '../types/server';

@Injectable({
  providedIn: 'root',
})
export class StateService {

  isConnectModalVisible: boolean;
  connectModalVisible: Subject<boolean> = new Subject();

  constructor() {
    this.isConnectModalVisible = false;
  }

  private stateSubject = new BehaviorSubject<AppState>({
    connectedServer: null,
    servers: [],
  });

  state$ = this.stateSubject.asObservable();

  registerServer(name: string, nick: string, channels: string[]): void {
    const currentState = this.stateSubject.value;
    const server: Server = { name, nick, channels, connected: true };
    console.log(name);
    localStorage.setItem('servers', JSON.stringify([server]));

    this.stateSubject.next({
      ...currentState,
      connectedServer: server,
      servers: [server],
    });
  }

  toggleConnectModalVisible(): void {
    this.isConnectModalVisible = !this.isConnectModalVisible;
    this.connectModalVisible.next(this.isConnectModalVisible);
  }
}
