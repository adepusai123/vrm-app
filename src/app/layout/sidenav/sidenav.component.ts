import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isLoggedIn: boolean;
  homePageUrl = '.';
  navRoutes = [];
  constructor(
    private utils: UtilsService,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.authStatus$.subscribe(() => {
      this.isLoggedIn = this.authService.isAuthencated();
      this.updateMenu();
    });
  }

  ngOnInit() {
  }

  updateMenu() {
    this.homePageUrl = this.isLoggedIn ? '/customers' : '.';
    this.navRoutes = [
      {
        name: 'Register',
        link: 'register',
        showMenu: !this.isLoggedIn,
        index: 2
      },
      {
        name: 'Customers',
        link: 'customers',
        showMenu: this.isLoggedIn,
        index: 3
      },
      {
        name: 'Vehicles',
        link: 'vehicles',
        showMenu: this.isLoggedIn,
        index: 4
      }].sort((a, b) => a.index - b.index);
  }

  logout() {
    this.authService.destroy();
    this.isLoggedIn = false;
    this.updateMenu();
    this.router.navigate(['/login']);
  }

}
