import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {
  transform(users: any[], currentUser: any): any[] {
    if (!users || !currentUser) {
      return users;
    }
    return users.filter(user => user.id !== currentUser.id);
  }
}
