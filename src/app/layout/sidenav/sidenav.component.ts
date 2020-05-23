import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isLoggedIn$: boolean;
  navRoutes = [];
  constructor(private authService: AuthService) {
    this.updateMenu();
  }

  ngOnInit() {

    this.updateMenu();
  }

  onLogout() {
    this.authService.updateUserLoginStatus(false);
  }

  updateMenu() {
    this.authService.isLoggedIn.subscribe(val => {
      this.isLoggedIn$ = val;
      this.navRoutes = [{
        name: 'Login',
        link: 'login',
        showMenu: !this.isLoggedIn$,
        index: 1
      },
      {
        name: 'Register',
        link: 'register',
        showMenu: !this.isLoggedIn$,
      },
      {
        name: 'Logout',
        link: 'logout',
        showMenu: this.isLoggedIn$,
        index: 100
      },
      {
        name: 'Customers',
        link: 'customers',
        showMenu: this.isLoggedIn$,
        index: 3
      },
      {
        name: 'Vehicles',
        link: 'vehicles',
        showMenu: this.isLoggedIn$,
        index: 4
      }].sort((a, b) => a.index - b.index)
    });
  }

}
