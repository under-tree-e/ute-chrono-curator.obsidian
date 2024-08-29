import moment from "moment";
const locale = require(`../../../../../assets/locales/${moment.locale()}.json`);

export class Detail {
    public locale = locale; //optimise string to help
    public items: { comment: string; tags: string; duration: string; time: string }[] = [];

    public updateList(data: any[]) {
        return data;
    }
    public openItem(item: any) {}
    public expandeAll() {}
    public expandeItem(item: any) {}
    public changeComment(item: any) {}
    public changeRange(item: any) {}
}
