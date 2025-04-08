import { Component } from '@angular/core';
import { NbCalendarKitModule, NbCalendarModule, NbCalendarRange, NbCalendarRangeModule, NbDateService } from '@nebular/theme';
import { DayCellComponent } from './day-cell/day-cell.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ngx-calendar',
    imports: [CommonModule, NbCalendarModule, NbCalendarRangeModule, NbCalendarKitModule, DayCellComponent],
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss'],
})
export class CalendarComponent {

  date = new Date();
  date2 = new Date();
  range: NbCalendarRange<Date>;
  dayCellComponent = DayCellComponent;

  constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
}
