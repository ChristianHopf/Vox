import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-connect-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './connect-modal.component.html',
  styleUrl: './connect-modal.component.css',
})
export class ConnectModalComponent {

  state$;
  showModal: boolean;

  constructor(private socketService: SocketService, private stateService: StateService) {
    this.state$ = this.stateService.state$;
    this.showModal = this.stateService.isConnectModalVisible;
  }

  @Input({ required: true }) onCloseModal!: () => void;

  address: string = '';
  nick: string = '';

  // Observe state subject to close modal

  toggleShowModal(): void {
    this.stateService.toggleConnectModalVisible();
    console.log('close modal');
  }

  handleAddServer(): void {
    let config = {
      address: this.address,
      port: 6667,
      nick: this.nick,
    };

    this.socketService.connectToServer(config);
    this.toggleShowModal();
  }
}
