import { Chart, ChartConfiguration } from "chart.js";

export class Donat {
    private chartOptions: ChartConfiguration["options"] = {
        elements: {
            line: {
                tension: 0.4,
            },
        },
        maintainAspectRatio: false,
        interaction: {
            mode: "index",
            intersect: false,
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            x: {
                grid: {
                    lineWidth: 0,
                },
                ticks: {
                    color: "#b3b3b3",
                    font: {
                        size: 18,
                    },
                    padding: 20,
                },
            },
            y: {
                grid: {
                    color: "#5c626b",
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: "#b3b3b3",
                    font: {
                        size: 18,
                    },
                    padding: 20,
                },
                grace: "10%",
            },
        },
    };
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
