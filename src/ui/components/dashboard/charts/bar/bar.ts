import { Chart, ChartConfiguration, ChartType } from "chart.js/auto";

export class Bar {
    private chartType: ChartType = "bar";
    private chartData: ChartConfiguration["data"] = {
        datasets: [],
        labels: [],
    };
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

    private chart: Chart | null = null;

    constructor(private canvas: any) {}

    public createChart() {
        const ctx = this.canvas.getContext("2d");
        if (ctx) {
            this.chart = new Chart(ctx, {
                type: this.chartType,
                data: this.chartData,
                options: this.chartOptions,
            });
        }
    }

    public destroyChart() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}
