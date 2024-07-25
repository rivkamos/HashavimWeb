import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DepartmentType, User, WorkerType } from 'src/models/user';
import { EnumToStringPipe } from 'src/pipes/enum-to-string.pipe';
import { UserService } from 'src/services/user.services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [EnumToStringPipe] 
})
export class UserListComponent{
  @Output() userSelected = new EventEmitter<User>();
  @Input() users!: User[];
  
  selectedUser: User | undefined;
  DepartmentType = DepartmentType;
  WorkerType = WorkerType; 

  constructor() { }

  selectUser(user: User): void {
    this.userSelected.emit(user);
  } 
}
