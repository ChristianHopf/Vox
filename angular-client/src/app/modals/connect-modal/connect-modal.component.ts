import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connect-modal',
  standalone: true,
  imports: [FormsModule],
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
    console.log('close modal');
  }

  handleAddServer(): void {
    let config = {
      address: this.address,
      port: 6667,
      nick: this.nick,
    };
    console.log(this.address);
    this.socketService.connectToServer(config);
  }
}
