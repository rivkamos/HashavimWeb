import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'hashavin-app';
  currentUser!: User;
  allUsers! : User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users;
    });
  }

  onUserSelected(user: User): void {
    this.currentUser = user;
  }
}
