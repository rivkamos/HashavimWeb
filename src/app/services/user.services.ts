import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    private usersList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    public users$ = this.usersList.asObservable();
    private baseUrl = `${environment.baseUrl}`; 

    constructor(private http: HttpClient) {}
  
    getUsers() {
        return this.http.get<User[]>(`${this.baseUrl}Organization/GetWorkerList`);
    }

    getUserById(id: number): User | undefined {
      return this.usersList.getValue().find(user => user.id === id);
    }
}
