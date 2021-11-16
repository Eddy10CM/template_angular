import { Component, Input, OnChanges } from '@angular/core'
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { ChartSimple } from '../../models/class/chart-simple'
import { ChartDataSets, ChartOptions } from 'chart.js'
import { MoreGraph } from '../../models/class/more-graph';

@Component({
	selector: 'app-card-graph-number',
	templateUrl: './card-graph-number.component.html',
})
export class CardGraphNumberComponent implements OnChanges {
	@Input() chartData: Array<ChartDataSets> = []
	@Input() chartLabel: Array<string> = []
	@Input() total: number | string
	@Input() title: string
	flipped = false

	public lineChart2Options: ChartOptions;

	public lineChart2Colours: Array<any> [];

	public lineChart2Legend = false
	public lineChart2Type = 'bar'

	constructor() {
	}

	ngOnChanges(): void {
		const chart: MoreGraph = new MoreGraph('bar');
		this.lineChart2Options = chart.getChartOptions();
		this.lineChart2Colours = chart.generateGraph();
		this.lineChart2Options.plugins.datalabels.display = false;
	}

	toogleView(): void {
		this.flipped = !this.flipped
	}
}
