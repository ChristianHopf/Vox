import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-connect-modal',
  standalone: true,
  imports: [],
  templateUrl: './connect-modal.component.html',
  styleUrl: './connect-modal.component.css',
})
export class ConnectModalComponent {
  constructor(private socketService: SocketService) {}

  @Input({ required: true }) onCloseModal!: () => void;

  address: string = '';
  nick: string = '';

  handleCloseModal(): void {
    this.onCloseModal();
  }

  handleAddServer(): void {
    let config = {
      address: this.address,
      port: 6667,
      nick: this.nick,
    };
    this.socketService.connectToServer(config);
  }
}
