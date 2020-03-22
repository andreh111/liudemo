import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {AuthService} from '../auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: string;
  profile: string;

  constructor(public authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = params.get('user') || this.authService.user.displayName;
      this.profile = params.get('profile') || this.authService.user.photoURL;
    });
  }

}
