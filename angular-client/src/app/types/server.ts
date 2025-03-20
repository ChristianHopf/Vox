export interface Server {
  name: string;
  nick: string;
  channels: string[];
  connected: boolean;
}

export interface AppState {
  connectedServer: Server | null;
  servers: Server[];
}
