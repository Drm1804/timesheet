import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  private _calcLength(val: number): string {
    if (val < 10) {
      return `0${val}`;
    } else {
      return `${val}`;
    }
  }

  transform(value: number): string {
    const date = new Date(value);
    return `${this._calcLength(date.getUTCHours())}:${this._calcLength(date.getMinutes())}:${this._calcLength(date.getSeconds())}`;
  }

}
