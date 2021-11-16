import { Component, Input, OnChanges } from '@angular/core'
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { ChartSimple } from '../../models/class/chart-simple'
import { ChartOptions } from 'chart.js'
import { MoreGraph } from '../../models/class/more-graph';

@Component({
	selector: 'app-card-graph-number',
	templateUrl: './card-graph-number.component.html',
})
export class CardGraphNumberComponent implements OnChanges {
	@Input() chartData: Array<ChartSimple> = []
	@Input() chartLabel: Array<string> = []
	@Input() total: number | string
	@Input() title: string
	flipped = false

	public lineChart2Options: ChartOptions;

	public lineChart2Colours: Array<any> = [
		{
			// grey
			backgroundColor: getStyle('--info'),
			borderColor: 'rgba(255,255,255,.55)',
		},
	]

	public lineChart2Legend = false
	public lineChart2Type = 'line'

	constructor() {}

	ngOnChanges() {
		const chart: MoreGraph = new MoreGraph('line');
		this.lineChart2Options = chart.getChartOptions();
	}

	toogleView(): void {
		this.flipped = !this.flipped
	}
}
