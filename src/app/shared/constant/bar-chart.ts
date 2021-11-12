import { ChartOptions } from "chart.js";
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export const BAR_CHART_OPTIONS: ChartOptions = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [
            {
                display: false,
            },
        ],
        yAxes: [
            {
                display: false,
            },
        ],
    },
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
        },
    }
}