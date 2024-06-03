import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  // public parameter can be only binded for template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}