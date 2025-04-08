import { Component } from '@angular/core';
import { CalendarKitMonthCellComponent } from './month-cell/month-cell.component';
import { NbCalendarKitModule, NbCardModule } from '@nebular/theme';

@Component({
    selector: 'ngx-calendar-kit',
    imports: [NbCardModule, NbCalendarKitModule],
    templateUrl: 'calendar-kit.component.html',
    styleUrls: ['calendar-kit.component.scss'],
})
export class CalendarKitFullCalendarShowcaseComponent {
  month = new Date();
  monthCellComponent = CalendarKitMonthCellComponent;
}
