import { Kpi } from './../../models/kpi'
import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-card-number',
	templateUrl: './card-number.component.html',
	styleUrls: ['../card-number/card-number.component.scss'],
})
export class CardNumberComponent implements OnInit {
	name = 'Title'
	value = '0'
	units = ''
	kpi: Kpi = new Kpi('kpi', 'Kpi', '0', '')

	@Input() kpilist: Kpi[] = []

	ngOnInit(): void {
		this.kpi = this.kpilist[0]
	}

	setKpi(i: number): void {
		document.getElementById(this.kpi._id).classList.remove('active')
		this.kpi = this.kpilist[i]
		document.getElementById(this.kpi._id).classList.add('active')
	}
}
