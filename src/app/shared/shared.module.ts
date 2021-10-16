import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
