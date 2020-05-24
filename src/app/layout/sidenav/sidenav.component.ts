import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AuthGuard } from 'src/app/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isLoggedIn$: boolean;
  navRoutes = [];
  constructor(
    private authGuard: AuthGuard,
    private utils: UtilsService,
    private router: Router
  ) {
    this.authGuard.authStatus.subscribe((val) => {
      this.isLoggedIn$ = val;
      this.updateMenu();
    })
  }

  ngOnInit() {
  }

  updateMenu() {
    this.navRoutes = [
      {
        name: 'Register',
        link: 'register',
        showMenu: !this.isLoggedIn$,
        index: 2
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
      }].sort((a, b) => a.index - b.index);
  }

  logout() {
    this.utils.setToken('authToken', '');
    this.isLoggedIn$ = false;
    this.updateMenu();
    this.router.navigate(['/login']);
  }

}
