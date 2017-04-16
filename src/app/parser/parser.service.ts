import {Injectable} from '@angular/core';

@Injectable()
export class ParserService {

    constructor() {
    }


    prepareInputTimesheet(data) {
        const timesheets: Object[] = [];

        data.split('\n').forEach((el) => {
            timesheets.push(this._parseEntityTimesheet(el));
        });

        return timesheets;
    }

    private _parseEntityTimesheet(entity) {
        const returned:Object = {};
        const timesheet:any[] = entity.split(',');
        returned['data'] = new Date(timesheet[0]);
        returned['timeFrom'] = this._createDateWithTime(timesheet[0], timesheet[1]);
        returned['timeTo'] = this._createDateWithTime(timesheet[0], timesheet[2]);
        returned['queue'] = timesheet[3];
        returned['description'] = timesheet[4];
        return returned;
    }

    private _createDateWithTime(date, time): any{
        const nd = date.split('-').concat(time.split(':'));
        return new Date(nd[0], nd[1], nd[2], nd[3], nd[4]);
    }

}