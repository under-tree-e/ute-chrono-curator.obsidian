import type { App } from "obsidian";
import moment from 'moment'

export class FileNameFormatter {

  private DATE_REGEX = new RegExp(/{{DATE(\+-?[0-9]+)?}}/i);

  public async format(input: string): Promise<string> {
    let output: string = input;

    if (this.DATE_REGEX.test(output)) {
      const dateMatch = this.DATE_REGEX.exec(output);

      if (dateMatch && dateMatch[1]) {
        const offsetString = dateMatch[1].replace("+", "").trim();
        const offsetIsInt = NUMBER_REGEX.test(offsetString);
        if (offsetIsInt) offset = parseInt(offsetString);
      }
      output = this.replacer(output, this.DATE_REGEX, getDate({ offset: offset }));
    }

    return output;
  }
}
