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
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CardGrapGaugeComponent } from './components/card-grap-gauge/card-grap-gauge.component';
import { DraggerComponent } from './components/card-grap-gauge/dragger/dragger.component';
import { CardGrapChartJsComponent } from './components/card-grap-chart-js/card-grap-chart-js.component';


@NgModule({
  declarations: [
    TableComponent,
    CardGraphNumberComponent,
    CardGrapGaugeComponent,
    DraggerComponent,
    CardGrapChartJsComponent
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
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    TableComponent,
    CardGraphNumberComponent,
    CardGrapGaugeComponent,
    CardGrapChartJsComponent
  ]
})
export class SharedModule { }
