import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentType, Gender, User, WorkerType } from 'src/models/user';
import { EnumToStringPipe } from 'src/pipes/enum-to-string.pipe';
import { MessageService } from 'src/services/messages.services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [EnumToStringPipe] 
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User | null = null;
  @Input() users!: User[];

  selectedRecipientId: number | null = null;
  DepartmentType = DepartmentType;
  WorkerType = WorkerType;
  Gender = Gender;
  messageForm!: FormGroup;

  constructor(private fb: FormBuilder, public messageService: MessageService) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      selectedRecipient: ['', Validators.required], 
      message: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.messageForm.get('selectedRecipient')?.valueChanges.subscribe(value => {
      this.selectedRecipientId = Number(value); 
    });
  }

  sendMessage() {
    if (this.messageForm.valid && this.selectedRecipientId !== null) {
      this.messageService.sendMessage(this.user!.id, this.messageForm.value.message); 
      this.messageForm.reset(); 
    }
  }
}
