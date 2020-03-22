import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(public authService: AuthService, public route: Router) {
  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === '' && this.password === '') {
      alert('Please Enter a username and a password');
    } else if (this.username === 'eddy' && this.password === '1234') {
      this.route.navigate(['dashboard']);
    }
  }


}
