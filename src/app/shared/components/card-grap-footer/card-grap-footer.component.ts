import { Component, Input, OnInit } from '@angular/core';
import { ChartSimple } from '../../models/class/chart-simple';

@Component({
  selector: 'app-card-grap-footer',
  templateUrl: './card-grap-footer.component.html',
  styleUrls: ['./card-grap-footer.component.scss']
})
export class CardGrapFooterComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';
  @Input() mainChartData: ChartSimple[] = [];
  @Input() mainChartLabels: string[] = [];
  mainChartOptions = {};
  mainChartColours = [];
  mainChartLegend = '';
  mainChartType = 'line';

  radioModel = 'Month';

  constructor() { }

  ngOnInit(): void {
  }

}
