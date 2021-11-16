import { Kpi } from './../../models/class/kpi'
import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-card-number',
	templateUrl: './card-number.component.html',
	styleUrls: ['../card-number/card-number.component.scss'],
})
export class CardNumber implements OnInit {
	name = 'Title'
	value = '0'
	units = ''
	kpi: Kpi = new Kpi('', '', '', '')
	kpi1: Kpi = new Kpi('kpi1', 'Kpi1', '10', '')
	kpi2: Kpi = new Kpi('kpi2', 'Kpi2', '20', '')
	kpi3: Kpi = new Kpi('kpi3', 'Kpi3', '30', '')

	@Input() kpiList: any[] = [this.kpi1, this.kpi2, this.kpi3]

	ngOnInit(): void {
		this.kpi = this.kpiList[0]
	}

	setKpi(i: number): void {
		document.getElementById(this.kpi._id).classList.remove('active')
		this.kpi = this.kpiList[i]
		document.getElementById(this.kpi._id).classList.add('active')
	}
}
