import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
    private userMessages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    public messages$ = this.userMessages.asObservable();
    private baseUrl = `${environment.baseUrl}`; 
    
    constructor(private http: HttpClient) {}
  
    getUserMessages(workerId : number) {
        return this.http.get<string[]>(`${this.baseUrl}Messages/GetMessages/${workerId}`).subscribe(
          (data) => {
            this.userMessages.next(data);
          },
          (error) => {
            console.error('Error retrieving data:', error);
          }
        );
    }

    sendMessage(workerId: number, message: string) {
      const url = `${this.baseUrl}Messages/SendMessage/${workerId}`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const body = JSON.stringify(message);
  
      return this.http.post(url, body, { headers }).subscribe({
        next: () => {
          this.getUserMessages(workerId);
        },
        error: (err) => {
          console.error('Failed to send message', err);
        }
      });
    }
}
