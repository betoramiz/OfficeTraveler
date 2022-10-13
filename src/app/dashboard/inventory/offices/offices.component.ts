import { Component, OnInit } from '@angular/core';


export interface OfficeType {
  name: string;
  inventory: number;
}

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  dataSource: OfficeType[] = [
    { name: 'Silla individual', inventory: 10 },
    { name: 'Oficina Privada', inventory: 5 },
    { name: 'Sala de Juntas', inventory: 2 }
  ];
  displayedColumns = ['name', 'inventory'];

  constructor() { }

  ngOnInit(): void {
  }

}
