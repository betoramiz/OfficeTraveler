import { Component, OnInit } from '@angular/core';

export interface TestData {
  id: number;
  name: string;
  location: string;
  memberSince: string;
}

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.component.html',
  styleUrls: ['./spaces-list.component.css']
})
export class SpacesListComponent implements OnInit {

  dataSource: TestData[] = [
    { name: 'coworking 1', location: 'La Paz BCS', memberSince: '10 de Enero de 2020', id: 1 },
    { name: 'coworking 1', location: 'La Paz BCS', memberSince: '10 de Enero de 2020', id: 2 },
    { name: 'coworking 1', location: 'La Paz BCS', memberSince: '10 de Enero de 2020', id: 3 },
  ];

  displayedColumns: string[] = ['name', 'location', 'memberSince', 'options'];

  constructor() { }

  ngOnInit(): void {
  }

}
