import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-slide-out',
  standalone: false,
  styleUrls: ['./slide-out.component.scss'],
  templateUrl: './slide-out.component.html',
})
export class SlideOutComponent {

  @Input() showVisitorsStatistics: boolean = false;

  toggleStatistics() {
    this.showVisitorsStatistics = !this.showVisitorsStatistics;
  }
}
