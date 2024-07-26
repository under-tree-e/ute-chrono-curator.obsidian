import moment from "moment";

export class FileNameFormatter {
    public async format(input: string): Promise<string> {
        let output: string = input;
        if (output) {
            const regex = /\{\{DATE\((.*?)\)\}\}/g;
            output = output.replace(regex, (match, format) => {
                return moment().format(format);
            });
        }
        return output;
    }
}
