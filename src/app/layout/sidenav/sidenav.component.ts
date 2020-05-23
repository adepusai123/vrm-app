import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  title: string = 'VRM App';
  navRoutes = [
    {
      name: 'Login',
      link: 'login'
    },
    {
      name: 'Register',
      link: 'register'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  showSideNav(snav) {
    snav.toggle();
  }

}
