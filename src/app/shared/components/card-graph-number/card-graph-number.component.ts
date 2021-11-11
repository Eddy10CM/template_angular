import { Component, Input} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ChartSimple } from '../../models/chart-simple';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-card-graph-number',
  templateUrl: './card-graph-number.component.html'
})
export class CardGraphNumberComponent {


  @Input() chartData: Array<ChartSimple> = [];
  @Input() chartLabel: Array<string> = [];
  @Input() total: number | string;
  @Input() title: string;
  flipped = false;


  public lineChart2Options: ChartOptions = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        display: false
      }
    }
  };

  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];

  public lineChart2Legend = false;
  public lineChart2Type = 'line';

  constructor() { }

  toogleView(): void {
    this.flipped = !this.flipped;
  }
}
