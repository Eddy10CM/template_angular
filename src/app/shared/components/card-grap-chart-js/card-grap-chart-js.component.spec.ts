import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CardGrapChartJsComponent } from './card-grap-chart-js.component'

describe('CardGrapChartJsComponent', () => {
	let component: CardGrapChartJsComponent
	let fixture: ComponentFixture<CardGrapChartJsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CardGrapChartJsComponent],
		}).compileComponents()
	})

	beforeEach(() => {
		fixture = TestBed.createComponent(CardGrapChartJsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
