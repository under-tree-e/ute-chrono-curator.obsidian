import { Chart, ChartConfiguration } from "chart.js";

export class Donat {
    private chartOptions: ChartConfiguration["options"] = {};
    private chart: Chart = {} as Chart;

    constructor(private canvas: any) {}

    public createChart(): Chart {
        const ctx = this.canvas.getContext("2d");
        this.chart = new Chart(ctx, {
            type: "doughnut",
            data: {
                datasets: [],
                labels: [],
            },
            options: this.chartOptions,
        });

        return this.chart;
    }

    public updateChart(chart: Chart, data?: any) {
        chart.data = data;
        chart?.update();
    }

    public destroyChart() {
        if (this.chart) {
            this.chart.destroy();
        }
    }
}
