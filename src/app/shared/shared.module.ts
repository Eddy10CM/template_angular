import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { CardGraphNumberComponent } from './components/card-graph-number/card-graph-number.component';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FlipModule } from 'ngx-flip';


@NgModule({
  declarations: [
    TableComponent,
    CardGraphNumberComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    CommonModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    FlipModule,
    ButtonsModule.forRoot()
  ],
  exports: [
    TableComponent,
    CardGraphNumberComponent
  ]
})
export class SharedModule { }
