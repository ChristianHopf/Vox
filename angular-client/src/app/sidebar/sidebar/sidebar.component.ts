import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { StateService } from '../../services/state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ServerComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input({ required: true }) onOpenModal!: () => void;
  @Input({ required: true }) onCloseModal!: () => void;

  state$;

  constructor(private stateService: StateService) {
    this.state$ = this.stateService.state$;
  }

  handleOpenModal(): void {
    this.onOpenModal();
  }
}
