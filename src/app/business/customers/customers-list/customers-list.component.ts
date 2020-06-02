import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers = [
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
    { name: 'Sai Kumar', age: 26, aadhar: 'A-1', driving: 'D1', mobile: '999988899' },
  ];
  displayedColumns: string[] = ['name', 'mobile', 'aadhar', 'driving'];
  constructor() { }
  ngOnInit() {
  }

}
