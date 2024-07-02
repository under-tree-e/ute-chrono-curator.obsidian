import type { App } from "obsidian";

export class FileNameFormatter {
  
  private DATE_REGEX = new RegExp(/{{DATE(\+-?[0-9]+)?}}/i);
  private DATE_REGEX_FORMATTED = new RegExp(/{{DATE:([^}\n\r+]*)(\+-?[0-9]+)?}}/i);
  private TIME_REGEX = new RegExp(/{{TIME}}/i);
  private TIME_REGEX_FORMATTED = new RegExp(/{{TIME:([^}\n\r+]*)}}/i);
  
  constructor(private app: App) {
    super();
  }

  public async format(input: string): Promise<string> {
    let output: string = input;
    
    if (DATE_REGEX.test(output)) {
      const dateMatch = DATE_REGEX.exec(output);
      let offset: number | undefined;

      if (dateMatch && dateMatch[1]) {
        const offsetString = dateMatch[1].replace("+", "").trim();
        const offsetIsInt = NUMBER_REGEX.test(offsetString);
        if (offsetIsInt) offset = parseInt(offsetString);
      }
      output = this.replacer(output, DATE_REGEX, getDate({ offset: offset }));
    }

    return output;
  }
}