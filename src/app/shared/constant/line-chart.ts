import { ChartOptions } from "chart.js";
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export const LINE_CHART_OPTIONS: ChartOptions = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [
            {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                },
            },
        ],
        yAxes: [
            {
                display: false,
                ticks: {
                    display: false,
                    
                },
            },
        ],
    },
    elements: {
        line: {
            tension: 0.00001,
            borderWidth: 1,
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
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