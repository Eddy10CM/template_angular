import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { IColumns } from '../../models/i-columns';
import { IRows } from '../../models/i-rows';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() title!: string;
  @Input() columns!: IColumns[];
  @Input() rows!: IRows[];
  @Output() delegetRow: EventEmitter<any> = new EventEmitter();

  rowLocal!: any[];
  totalItems = 1;
  currentPage = 1;
  page?: number;
  

  constructor() { }

  ngOnChanges(): void {
    console.log(this.rows);
    this.refreshInfo();
    this.totalItems = this.rows.length;
  }

  refreshInfo() {
    this.rowLocal = this.rows.map((row) => {
      let r = [];
      for( const key in row) {
        const info = {
          key: key,
          value: row[key]
        }
        r.push(info);
      }
      return r;
    });
    console.log(this.rowLocal);
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
  }

  clickRow(row: any): void{
    this.delegetRow.emit(row);
  }
}
