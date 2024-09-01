import moment from "moment";
const locale = require(`../../../../../assets/locales/${moment.locale()}.json`);

export class List {
    public locale = locale; //optimise string to help
    public items: { title: string; duration: string; percentage: number }[] = [];
    public item: any = null;

    public updateList(data: any[]) {
        return data;
    }
    public openItem(record: any) {
        console.log("openItem");
        console.log(record);
        // this.item = record;

        return record;
    }
    public expandeAll() {}
    public expandeItem(item: any) {}
}
