import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/services/utils.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vrm-app';
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    // if (this.authService.isAuthencated()) {
    //   this.router.navigate(['/customers']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }
}
