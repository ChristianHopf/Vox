import { Component, ChangeDetectorRef } from '@angular/core';
import { ConnectModalComponent } from '../modals/connect-modal/connect-modal.component';
import { SidebarComponent } from '../sidebar/sidebar/sidebar.component';
import { ChannelsComponent } from '../chat/channels/channels.component';
import { MessagesComponent } from '../chat/messages/messages.component';
import { MessageinputComponent } from '../chat/messageinput/messageinput.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    ConnectModalComponent,
    SidebarComponent,
    ChannelsComponent,
    MessagesComponent,
    MessageinputComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isOpen: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  openModal = () => {
    this.isOpen = true;
    this.cdr.detectChanges();
  };
  closeModal = () => {
    this.isOpen = false;
    this.cdr.detectChanges();
  };
}
