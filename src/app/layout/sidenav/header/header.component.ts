import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sideMenuBar;
  @Input() homeLink;

  homeUrl: string;
  title: string = 'VRM App';
  constructor() { }

  ngOnInit() {
    console.log('-- ', this.homeLink);
    this.homeUrl = this.homeLink;
  }

  showSideNav() {
    this.sideMenuBar.toggle();
  }
}
