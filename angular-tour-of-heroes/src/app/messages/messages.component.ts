import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule, NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
