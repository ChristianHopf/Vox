import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input({ required: true }) onOpenModal!: () => void;
  @Input({ required: true }) onCloseModal!: () => void;

  handleOpenModal(): void {
    this.onOpenModal();
  }
}
