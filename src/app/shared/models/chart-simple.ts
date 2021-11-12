export class ChartSimple {
    data: Array<number>;
    label: string;
    barPercentage?: number;
    options: {key: string, value: string}[];

    constructor(options: {
        data?: Array<number>,
        label?: string,
        barPercentage?: number
    } = {}) {
        this.data = options.data;
        this.label = options.label;
        this.barPercentage = options.barPercentage;
    }
}
