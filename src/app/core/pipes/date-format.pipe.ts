// reference: basic basic directives and pipes in CommonModule
// https://angular.io/api/common/CommonModule

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

export const DEFAULT_DATE_FORMAT = 'YYYY/MM/DD';
export const DEFAULT_DATE_TIME_FORMAT = 'YYYY/MM/DD hh:mm:ss';
export const DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_LONG_FORMAT = 'DD MMM YYYY';
export const DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm:ss';
export const TIME_FORMAT = 'HH:mm:ss';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(dateStr: string, type: "date" | "time" | "datetime" = "date"): any {
    let dt = this.convertDateToMoment(dateStr);
    if (dt.isValid()) {
      switch (type) {
        case "time":
          return dt.format(TIME_FORMAT);
        case "datetime":
          return dt.format(DATE_TIME_FORMAT);
        default:
          return dt.format(DATE_FORMAT);
      }
    } else {
      return null;
    }
  }

  convertDateToMoment(dateStr: string): moment.Moment {
    return moment(dateStr, [DEFAULT_DATE_TIME_FORMAT, DATE_TIME_FORMAT, DATE_FORMAT, DEFAULT_DATE_FORMAT]);
  }
}
