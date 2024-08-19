// import { DailySummary } from "lib/stores/dailySummary";
// import { secondsToTimeString } from "lib/util/millisecondsToTimeString";
// import { CurrentTimer } from "lib/stores/currentTimer";
// import { settingsStore } from "lib/util/stores";
import { DashboardSettings } from "@interfaces/dashboard";
import { Bar } from "./charts/bar/bar";

// export let source: string;

export class Dashboard {
    public bar: any;
    public settings: DashboardSettings = {} as DashboardSettings;
    public title: string = "";
    public totalTime: string = "";
    public barList: {
        color: string;
        percentage: number;
        text: string;
    }[] = [];
    public projectList: {
        color: string;
        duration: string;
        name: string;
    }[] = [];
    public duration_seconds: number = 0;
    public data: any = {};
    public selected: any = null;

    constructor() {
        console.log("json", "123");
        this.title = "Month";
        this.totalTime = "42h 35m 41s";
        this.data = {
            labels: ["111", "222", "333", "444"],
            datasets: [1, 5, 1.2, 8],
        };
        console.log(222);

        setTimeout(() => {
            this.updateCharts(this.data);
        }, 2000);
    }

    public init(json: string) {
        console.log("json", json);

        // this.barList = computeList(DailySummary);
        // this.projectList = computeList(DailySummary, duration_seconds);
    }

    public updateCharts(data: any) {
        console.log(333);
    }

    // private computeList(summary: typeof DailySummary, current_timer_duration_seconds?: number) {
    //     if (current_timer_duration_seconds) {
    //         return summary.projects_breakdown.map((project) => {
    //             const currentTimerSeconds = $settingsStore.updateInRealTime && $CurrentTimer?.project_id === project.project_id ? current_timer_duration_seconds ?? 0 : 0;

    //             return {
    //                 color: project.$project?.color ?? "var(--text-muted)",
    //                 duration: secondsToTimeString(project.tracked_seconds + currentTimerSeconds),
    //                 name: project.$project?.name ?? "(No project)",
    //             };
    //         });
    //     } else {
    //         const total: number = summary.total_seconds;

    //         let tmp_list = summary.projects_breakdown.map((project) => ({
    //             color: project.$project?.color ?? "var(--text-muted)",
    //             percentage: Math.max((project.tracked_seconds / total) * 100, 5),
    //             text: `${project.$project?.name ?? "(No project)"} (${secondsToTimeString(project.tracked_seconds)})`,
    //         }));

    //         const sum = tmp_list.reduce((a, b) => a + b.percentage, 0);
    //         if (sum > 100) {
    //             tmp_list.forEach((e) => (e.percentage = (e.percentage / sum) * 100));
    //         }

    //         return tmp_list;
    //     }
    // }
}
