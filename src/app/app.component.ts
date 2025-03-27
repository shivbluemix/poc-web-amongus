import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Message } from './models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = '';
  output: string | null = null;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.sendMessage(this.message).subscribe((response: string) => {
      this.output = response; 
    }, error => {
      this.output = 'Error fetching data';
    });
  }
}