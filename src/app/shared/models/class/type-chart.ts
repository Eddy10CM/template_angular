import { ChartOptions } from "chart.js";
import { LINE_CHART_OPTIONS } from "../../constant/line-chart";
import { BAR_CHART_OPTIONS } from "../../constant/bar-chart";


export abstract class TypeChart {
    typeChart: string;
    constructor(typeChart: string) {
        this.typeChart = typeChart;
    }

    /**
     * 
     */
    abstract generateGraph(): Array<any>;
 
    getChartOptions(): ChartOptions {
        let optionsChart: ChartOptions = {};
        switch(this.typeChart) {
            case 'line':
                optionsChart = LINE_CHART_OPTIONS;
                break;
            case 'bar':
                optionsChart = BAR_CHART_OPTIONS;
                break;
        }

        return optionsChart;
    }
}
