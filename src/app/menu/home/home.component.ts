import { Component, OnInit } from '@angular/core';
import { IColumns } from 'src/app/shared/models/i-columns';
import { IRows } from 'src/app/shared/models/i-rows';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columnsHome: IColumns[] = [];
  rowsHome: IRows[] = [];

  rows = [
    {nombre: 'Eddy'},
    {nombre: 'Eddy'},
  ]

  constructor() { }

  ngOnInit(): void {
    this.columnsHome.push({
      columnDef: 'Name',
      header: 'Nombre'
    });

    let row: IRows;
    this.rows.forEach(( rowTest: any) => {
      row = {};
      for (const key in rowTest) {
        row[key] = rowTest[key];
      }
      this.rowsHome.push(row)
   });
  }

}
