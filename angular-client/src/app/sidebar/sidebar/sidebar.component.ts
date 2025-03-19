import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
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
