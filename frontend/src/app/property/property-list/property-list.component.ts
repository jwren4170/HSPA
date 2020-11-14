import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: '120,000',
    },
    {
      Id: 2,
      Name: 'Erose Villa',
      Type: 'House',
      Price: '140,000',
    },
    {
      Id: 3,
      Name: 'Macro Home',
      Type: 'House',
      Price: '220,000',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
