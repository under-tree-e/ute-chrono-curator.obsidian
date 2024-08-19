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

    // private chart: Chart;
    // public canvas: any;

    constructor(private canvas: any) {
        // constructor() {
        console.log(101);
    }

    // public update(data: any) {
    //     this.chartData = data;
    //     this.createChart();
    // }

    public createChart(data?: any): Chart {
        console.log(111);
        console.log(data);
        console.log(this.canvas);

        if (data) this.chartData = data;
        // try{
        const ctx = this.canvas.getContext("2d");
        // if (ctx) {
        const chart = new Chart(ctx, {
            type: this.chartType,
            data: this.chartData,
            options: this.chartOptions,
        });

        chart.
        // }
        console.log(chart);
        chart.update();
        console.log("UPD");

        // }catch(error){
        //     console.error(error);

        // }

        return chart;
    }

    public updateChart(chart: Chart, data?: any) {
        if (data) this.chartData = data;
        console.log(chart);

        chart?.update();
    }

    public destroyChart() {
        // if (this.chart) {
        //     this.chart.destroy();
        //     this.chart = null;
        // }
    }
}
