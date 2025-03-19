import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-modal',
  standalone: true,
  imports: [],
  templateUrl: './connect-modal.component.html',
  styleUrl: './connect-modal.component.css',
})
export class ConnectModalComponent {
  @Input({ required: true }) onCloseModal!: () => void;

  address: string = '';
  nick: string = '';

  handleCloseModal(): void {
    this.onCloseModal();
  }

  handleAddServer(): void {
    // TODO: add api logic
    // connectToServer({ address: address.value, port: 6667, nick: nick.value });
  }
}
