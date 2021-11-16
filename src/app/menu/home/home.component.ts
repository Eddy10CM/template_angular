import { Component, OnInit, ViewChild } from '@angular/core';
import { IColumns } from 'src/app/shared/models/i-columns';
import { IRows } from 'src/app/shared/models/i-rows';
import { AuthService } from '../../shared/services/auth.service';
import { TableComponent } from '../../shared/components/table/table.component';
import { ChartSimple } from 'src/app/shared/models/class/chart-simple';

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

	// lineChart4
	public lineChart4Data: Array<any> = [
		{
			data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
			label: 'Series A'
		}
	];
	public lineChart4Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	public lineChart4Options: any = {
		tooltips: {
			enabled: true,
			//custom: CustomTooltips
		},
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				display: false,
				points: false,
			}],
			yAxes: [{
				display: false,
			}]
		},
		elements: { point: { radius: 0 } },
		legend: {
			display: false
		}
	};
	public lineChart4Colours: Array<any> = [
		{
			backgroundColor: 'transparent',
			borderColor: 'rgba(255,255,255,.55)',
			borderWidth: 2
		}
	];
	public lineChart4Legend = false;
	public lineChart4Type = 'line';

	// barChart2
	public barChart2Data: Array<any> = [
		{
			data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
			label: 'Series A',
			barPercentage: 0.6
		}
	];
	public barChart2Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	public barChart2Options: any = {
		tooltips: {
			enabled: true,
			//custom: CustomTooltips
		},
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				display: false,
			}],
			yAxes: [{
				display: false,
				ticks: {
					beginAtZero: true,
				}
			}]
		},
		legend: {
			display: false
		}
	};
	public barChart2Colours: Array<any> = [
		{
			backgroundColor: 'rgba(0,0,0,.2)',
			borderWidth: 0
		}
	];
	public barChart2Legend = false;
	public barChart2Type = 'bar';



	//----
	lineChart2Data: ChartSimple[] = [];
	lineChart1Labels: string[] = [];
	data: ChartSimple;
	constructor(private userAuth: AuthService) { }


	ngOnInit(): void {
		/*this.columnsHome.push({
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
		})*/

		this.data = new ChartSimple({
			data: [5, 18, 9, 17, 50, 22, 11],
			label: 'Series A',
			barPercentage: 0.5
		});
		this.lineChart2Data.push(this.data);
		this.lineChart1Labels = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
		];
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
