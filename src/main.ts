import { Plugin } from "obsidian";

export default class CronoCuratorPlugin extends Plugin {

    private cache: Cache | undefined;
    public inlineRenderer: InlineRenderer | undefined;
    public queryRenderer: QueryRenderer | undefined;

    async onload() {
        await this.loadSettings();

        this.addSettingTab(new SettingsTab({plugin: this}));
        
        initializeFile({
            metadataCache: this.app.metadataCache,
            vault: this.app.vault,
            workspace: this.app.workspace,
        });

                const events = new TasksEvents({ obsidianEvents: this.app.workspace });
        this.cache = new Cache({
            metadataCache: this.app.metadataCache,
            vault: this.app.vault,
            events,
        });
        this.inlineRenderer = new InlineRenderer({ plugin: this });
        this.queryRenderer = new QueryRenderer({ plugin: this, events });

        this.registerEditorExtension(newLivePreviewExtension());
        this.registerEditorSuggest(new EditorSuggestor(this.app, getSettings(), this));
        new Commands({ plugin: this });
    }
    
    onunload() {
        console.log('info', `unloading plugin "${this.manifest.name}" v${this.manifest.version}`);
        this.cache?.unload();
    }

        async loadSettings() {
        let newSettings = await this.loadData();
        updateSettings(newSettings);

        // Fetch the updated settings, in case the user has not yet edited the settings,
        // in which case newSettings is currently empty.
        newSettings = getSettings();
        GlobalFilter.getInstance().set(newSettings.globalFilter);
        GlobalFilter.getInstance().setRemoveGlobalFilter(newSettings.removeGlobalFilter);
        GlobalQuery.getInstance().set(newSettings.globalQuery);

        
    }

    async saveSettings() {
        await this.saveData(getSettings());
    }

    public getTrackers(): Tracker[] {
        if (this.cache === undefined) {
            return [] as Tracker[];
        } else {
            return this.cache.getTrackers();
        }
    }
}
