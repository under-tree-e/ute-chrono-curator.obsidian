import { App, PluginSettingTab, Setting } from "obsidian";
import CronoCuratorPlugin from "@app/index";
import { defaultSettings } from "@interfaces/settings";
import { FileNameFormatter } from "@utils/fileNameFormater";
import moment from "moment";

export class SettingsTab extends PluginSettingTab {
    private plugin: CronoCuratorPlugin;
    private filePath: string = "";

    constructor(plugin: CronoCuratorPlugin) {
        super(plugin.app, plugin);
        this.plugin = plugin;
    }

    public async display() {
        const displayFormatter: FileNameFormatter = new FileNameFormatter();
        this.filePath = await displayFormatter.format(this.plugin.settings.fileName);
        const locale = require(`../../../assets/locales/${moment.locale()}.json`);

        this.containerEl.empty();
        this.containerEl.createEl("h2", { text: locale.settings_title });

        new Setting(this.containerEl)
            .setName(locale.setttings_timestamp_format)
            .setDesc(
                createFragment((f) => {
                    f.createSpan({ text: locale.setttings_timestamp_format_text });
                    f.createEl("a", { text: "moment.js", href: "https://momentjs.com/docs/#/parsing/string-format/" });
                    f.createSpan({ text: locale.setttings_timestamp_format_text_end });
                })
            )
            .addText((t) => {
                t.setValue(String(this.plugin.settings.timestampFormat));
                t.onChange(async (v) => {
                    this.plugin.settings.timestampFormat = v.length ? v : defaultSettings.timestampFormat;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(this.containerEl)
            .setName(locale.setttings_csvDelimiter)
            .setDesc(locale.setttings_csvDelimiter_text)
            .addText((t) => {
                t.setValue(String(this.plugin.settings.csvDelimiter));
                t.onChange(async (v) => {
                    this.plugin.settings.csvDelimiter = v.length ? v : defaultSettings.csvDelimiter;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(this.containerEl)
            .setName(locale.setttings_fineGrainedDurations)
            .setDesc(locale.setttings_fineGrainedDurations_text)
            .addToggle((t) => {
                t.setValue(this.plugin.settings.fineGrainedDurations);
                t.onChange(async (v) => {
                    this.plugin.settings.fineGrainedDurations = v;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(this.containerEl)
            .setName(locale.setttings_timestampDurations)
            .setDesc(locale.setttings_timestampDurations_text)
            .addToggle((t) => {
                t.setValue(this.plugin.settings.timestampDurations);
                t.onChange(async (v) => {
                    this.plugin.settings.timestampDurations = v;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(this.containerEl)
            .setName(locale.setttings_reverseSegmentOrder)
            .setDesc(locale.setttings_reverseSegmentOrder_text)
            .addToggle((t) => {
                t.setValue(this.plugin.settings.reverseSegmentOrder);
                t.onChange(async (v) => {
                    this.plugin.settings.reverseSegmentOrder = v;
                    await this.plugin.saveSettings();
                });
            });

        const fileNameSetting: Setting = new Setting(this.containerEl)
            .setName(`${locale.setttings_file}${this.filePath}`)
            .setDesc(locale.setttings_fileName_text)
            .addText((t) => {
                t.setValue(this.plugin.settings.fileName);
                t.onChange(async (v) => {
                    this.plugin.settings.fileName = v;
                    this.filePath = await displayFormatter.format(v);
                    fileNameSetting.setName(`File name: ${this.filePath}`);

                    await this.plugin.saveSettings();
                });
            });

        new Setting(this.containerEl)
            .setName(locale.setttings_createFile)
            .setDesc("")
            .addToggle((t) => {
                t.setValue(this.plugin.settings.createFile);
                t.onChange(async (v) => {
                    this.plugin.settings.createFile = v;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(this.containerEl)
            .setName(locale.setttings_writeToBottom)
            .setDesc(locale.setttings_writeToBottom_text)
            .addToggle((t) => {
                t.setValue(this.plugin.settings.writeToBottom);
                t.onChange(async (v) => {
                    this.plugin.settings.writeToBottom = v;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(this.containerEl)
            .setName(locale.setttings_insertAfter)
            .setDesc(locale.setttings_insertAfter_text)
            .addToggle((t) => {
                t.setValue(this.plugin.settings.insertAfter);
                t.onChange(async (v) => {
                    this.plugin.settings.insertAfter = v;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(this.containerEl)
            .setName("")
            .setDesc("")
            .addText((t) => {
                t.setValue(this.plugin.settings.insertAfterLine);
                t.onChange(async (v) => {
                    this.plugin.settings.insertAfterLine = v;
                    await this.plugin.saveSettings();
                });
            });

        // this.containerEl.createEl("hr");
        // this.containerEl.createEl("p", { text: "If you like this plugin and want to support its development, you can do so through my website by clicking this fancy image!" });
        // this.containerEl.createEl("a", { href: "https://ellpeck.de/support" }).createEl("img", {
        //     attr: { src: "https://ellpeck.de/res/generalsupport.png" },
        //     cls: "simple-time-tracker-support",
        // });
    }
}
