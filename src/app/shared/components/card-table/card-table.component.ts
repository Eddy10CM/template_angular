import { Component, Input, OnInit } from '@angular/core'
import { Kpi } from '../../models/class/kpi'
import { IColumns } from '../../models/i-columns'
import { IRows } from '../../models/i-rows'

@Component({
	selector: 'app-card-table',
	templateUrl: './card-table.component.html',
	styleUrls: ['./card-table.component.scss'],
})
export class CardTableComponent implements OnInit {


	rowLocal!: any[]
	totalItems = 1

	kpi: Kpi = new Kpi({})
	kpi1: Kpi = new Kpi({ label: 'Kpi2', data: '20', units: '' })
	kpi2: Kpi = new Kpi({ label: 'Kpi3', data: '30', units: '' })
	kpi3: Kpi = new Kpi({ label: 'Kpi4', data: '40', units: '' })
  
	@Input() kpiList: any[] = [this.kpi1, this.kpi2, this.kpi3]
  @Input() title!: string
	@Input() columns!: IColumns[]
	@Input() rows!: IRows[]

	constructor() {}

	ngOnChanges(): void {
		this.refreshInfo()
		this.totalItems = this.rows.length
	}

	refreshInfo(): any {
		this.rowLocal = this.rows.map((row) => {
			const r = []
			// tslint:disable-next-line: forin
			for (const key in row) {
				const info = {
					key,
					value: row[key],
				}
				r.push(info)
			}
			return r
		})
	}

	ngOnInit(): void {
    this.kpi = this.kpiList[0]
  }

	setKpi(i: number): void {
		document.getElementById(this.kpi._id).classList.remove('active')
		this.kpi = this.kpiList[i]
		document.getElementById(this.kpi._id).classList.add('active')
	}
}
