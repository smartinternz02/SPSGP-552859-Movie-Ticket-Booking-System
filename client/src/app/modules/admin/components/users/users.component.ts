import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  isLoading = false
  users: any[] = []
  constructor(private http:HttpClient){
    this.isLoading = true
    this.http.get<any[]>('http://localhost:5100/users').subscribe((res) => {
      this.users = res
      this.isLoading = false
    })
  }
}
