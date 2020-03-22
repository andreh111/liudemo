import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: string;
  profile: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.user = sessionStorage.getItem('user');
    this.profile = sessionStorage.getItem('profile');
    console.log(this.user);
  }

}
