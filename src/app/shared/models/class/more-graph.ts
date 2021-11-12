import { TypeChart } from './type-chart';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

export class MoreGraph extends TypeChart {
    constructor(typeGraph: string) {
        super(typeGraph);
    }

    generateGraph(): Array<any> {
        let colors = [];
        switch(this.typeChart) {
            case 'line':
                colors = [
                    {
                        // grey
                        backgroundColor: getStyle('--info'),
                        borderColor: 'rgba(255,255,255,.55)',
                    },
                ]
                break;
            case 'bar':
                colors = [
                    {
                        backgroundColor: 'rgba(255,255,255,.3)',
                        borderWidth: 0,
                    },
                ]
                break;
        }
        return colors;
    }
}
