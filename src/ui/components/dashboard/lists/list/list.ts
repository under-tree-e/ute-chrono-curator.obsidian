import moment from "moment";
const locale = require(`../../../../../assets/locales/${moment.locale()}.json`);

export class List {
    public locale = locale; //optimise string to help
    public items: { title: string; tags: string; duration: string; percentage: number }[] = [];
    public item: any = null;

    public updateList(data: any[]) {
        return data;
    }
    public openItem(record: any) {
        return record;
    }
    public expandeAll() {}
    public startNew() {}
    public expandeItem(item: any) {}
    public continueItem(item: any) {}
    public changeTime(item: any) {}
}
