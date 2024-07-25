import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/services/messages.services';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})

export class MessageBoxComponent implements OnInit, OnChanges {
  @Input() selectedUserId! : number | null;
  messages$: Observable<string[]> = this.messageService.messages$;

  constructor(public messageService:MessageService) {}

  ngOnInit(): void {
    if(this.selectedUserId) this.fetchMessages(this.selectedUserId);
  }

  ngOnChanges(changes: SimpleChanges): void {debugger
    if (changes['selectedUserId'] && this.selectedUserId) {
      this.fetchMessages(this.selectedUserId);
    }
  }

  fetchMessages(userId: number): void {debugger
    this.messageService.getUserMessages(userId);
  }
}
