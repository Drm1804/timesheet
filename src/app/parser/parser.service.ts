import {Injectable} from '@angular/core';

@Injectable()
export class ParserService {

  constructor() {
  }


  prepareInputTimesheet(data): any[] {
    try {
      const timesheets: Object[] = [];
      data.split('\n').forEach((el) => {
        timesheets.push(this._parseEntityTimesheet(el));
      });
      this._returnListQueues(timesheets);
      const info = {
        spentTime: this._calcFulltime(timesheets),
        queueList: this._returnListQueues(timesheets),
      };

      return [timesheets, info];
    } catch (e) {
      console.error('Error input data');
    }
  }

  private _returnListQueues(data: any[]): string[] {
    const queues = {};
    data.forEach((el) => {
      if(!queues[el.queue]){
        queues[el.queue] = true;
      }
    });
    return Object.keys(queues);
  }

  private _calcFulltime(data: any[]): number {
    let spentTime = 0;
    data.forEach((el) => {
      const from: any = new Date(el.timeFrom);
      const to: any = new Date(el.timeTo);
      spentTime += to - from;
    });
    return spentTime;
  }

  private _parseEntityTimesheet(entity) {
    const returned: Object = {};
    const timesheet: any[] = entity.split(',');
    returned['data'] = new Date(timesheet[0]);
    returned['timeFrom'] = this._createDateWithTime(timesheet[0], timesheet[1]);
    returned['timeTo'] = this._createDateWithTime(timesheet[0], timesheet[2]);
    returned['queue'] = timesheet[3];
    returned['description'] = timesheet[4];
    return returned;
  }

  private _createDateWithTime(date, time): any {
    const nd = date.split('-').concat(time.split(':'));
    return new Date(nd[0], nd[1], nd[2], nd[3], nd[4]);
  }

}
