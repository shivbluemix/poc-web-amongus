import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/agent/respond'; 

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, { message: message });
  }
}