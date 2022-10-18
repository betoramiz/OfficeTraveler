import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOfficeTypeComponent } from '../add-office-type/add-office-type.component';


export interface OfficeType {
  name: string;
  inventory: number;
  option: string;
}

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  dataSource: OfficeType[] = [
    { name: 'Silla individual', inventory: 10, option: '' },
    { name: 'Oficina Privada', inventory: 5, option: '' },
    { name: 'Sala de Juntas', inventory: 2, option: '' }
  ];
  displayedColumns = ['name', 'inventory', 'option'];

  constructor(private addOfficeDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.addOfficeDialog.open(AddOfficeTypeComponent, {
      hasBackdrop: false,
      data: { room: '', inventory: null, dialogTitle: 'Agregar' }
    });
  }

  openDetail(el: OfficeType) {
    this.addOfficeDialog.open(AddOfficeTypeComponent, {
      hasBackdrop: false,
      data: { room: el.name, inventory: el.inventory, dialogTitle: 'Editar' }
    });
  }
}
