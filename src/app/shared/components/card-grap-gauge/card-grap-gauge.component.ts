import { Component, OnDestroy, OnInit } from '@angular/core'

@Component({
	selector: 'app-card-grap-gauge',
	templateUrl: './card-grap-gauge.component.html',
	styleUrls: ['./card-grap-gauge.component.scss'],
})
export class CardGrapGaugeComponent implements OnDestroy {
	private alive = true

	temperatureData: { value: number; min: number; max: number }
	temperature: number
	temperatureOff = false
	temperatureMode = 'cool'

	humidityData: { value: number; min: number; max: number }
	humidity: number
	humidityOff = false
	humidityMode = 'heat'

	theme: any
	themeSubscription: any

	constructor() {
		this.theme = {
			arcEmpty: '#f7f9fc',
			arcFill: ['#3366ff', '#3366ff', '#3366ff', '#3366ff', '#3366ff'],
			thumbBg: '#f7f9fc',
			thumbBorder: '#3366ff',
		}
		this.temperatureData = { value: 24, min: 12, max: 30 }
		this.temperature = this.temperatureData.value
		this.humidityData = { value: 87, min: 0, max: 100 }
		this.humidity = this.humidityData.value
		console.log(this.theme)
	}

	ngOnDestroy(): void {
		this.alive = false
	}
}
