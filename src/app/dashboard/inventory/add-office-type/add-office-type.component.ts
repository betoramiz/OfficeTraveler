import { Component, Inject, OnInit } from '@angular/core';
import { InventoryModel } from '../models/inventory.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-office-type',
  templateUrl: './add-office-type.component.html',
  styleUrls: ['./add-office-type.component.css']
})
export class AddOfficeTypeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: InventoryModel) { }

  ngOnInit(): void {
  }

}
