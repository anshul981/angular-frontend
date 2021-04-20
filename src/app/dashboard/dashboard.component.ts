import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:string;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    console.log(this.auth.userValue.username);
    let user = this.auth.userValue.username;
  }

}
