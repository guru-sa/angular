import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message/message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // messageService 프로퍼티는 템플릿에 바인딩되기 때문에 반드시 public으로 선언해야 합니다.
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
