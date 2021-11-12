import { Component, OnInit, ViewChild } from '@angular/core'
import { IColumns } from 'src/app/shared/models/i-columns'
import { IRows } from 'src/app/shared/models/i-rows'
import { AuthService } from '../../shared/services/auth.service'
import { TableComponent } from '../../shared/components/table/table.component'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	columnsHome: IColumns[] = []
	rowsHome: IRows[] = []
	// @ViewChild('#test2', {static: false}) table2!: TableComponent;

	columnsInfo: IColumns[] = []
	rowsInfo2: IRows[] = []

	rows = [{ nombre: 'Eddy' }, { nombre: 'Eddy' }]

	constructor(private userAuth: AuthService) {}

	ngOnInit(): void {
		this.columnsHome.push({
			columnDef: 'Name',
			header: 'Nombre',
		})

		let row: IRows
		this.rows.forEach((rowTest: any) => {
			row = {}
			for (const key in rowTest) {
				row[key] = rowTest[key]
			}
			this.rowsHome.push(row)
		})
	}

	eventoRow(row: any[]) {
		// this.table2.rowLocal = [];
		this.columnsInfo = []
		this.rowsInfo2 = row
		console.log(
			'🚀 ~ file: home.component.ts ~ line 40 ~ HomeComponent ~ eventoRow ~ row',
			row,
		)
	}
}
