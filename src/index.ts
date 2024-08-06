import { MarkdownPostProcessorContext, Plugin } from "obsidian";
import { SettingsTab } from "./ui/components/settings/settings-tab";
import { defaultSettings, Settings } from "@interfaces/settings";
import DashboardUI from "./ui/components/dashboard/dashboard.svelte";

export default class CronoCuratorPlugin extends Plugin {
    public settings: Settings = {} as Settings;

    public async onload() {
        await this.loadSettings();
        this.addSettingTab(new SettingsTab(this));

        this.registerMarkdownCodeBlockProcessor("cc-tracker", (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
            if (source.includes("DIRECT")) {
            }
            if (source.includes("REPORT")) {
            }
            if (source.includes("TRACKER")) {
            }
            // console.log(source);
            // console.log(el);
            // console.log(ctx);

            // new DashboardUI({ props: { source: source }, target: el });
            new DashboardUI({ props: {}, target: el });
            // dashboard.init("test");

            //     e.empty();
            //     let component = new MarkdownRenderChild(e)
            //     let tracker = loadTracker(s);

            //     // Initial file name
            //     let filePath = i.sourcePath;

            //     // Getter passed to displayTracker since the file name can change
            //     const getFile = () => filePath;

            //     // Hook rename events to update the file path
            //     const renameEventRef = this.app.vault.on("rename", (file, oldPath) => {
            //         if (file instanceof TFile && oldPath === filePath) {
            //             filePath = file.path;
            //         }
            //     })

            //     // Register the event to remove on unload
            //     component.registerEvent(renameEventRef);

            //     displayTracker(this.app, tracker, e, getFile, () => i.getSectionInfo(e), this.settings, component);
            //     i.addChild(component)
        });

        this.addCommand({
            id: `insert`,
            name: `Insert CC Tracker`,
            editorCallback: (e, _) => {
                e.replaceSelection("```cc-tracker\n```\n");
            },
        });
    }

    async loadSettings() {
        this.settings = Object.assign({}, defaultSettings, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}
