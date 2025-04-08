import { Component } from '@angular/core';
import { NbCardModule, NbProgressBarModule } from '@nebular/theme';
import { InteractiveProgressBarComponent } from './interactive-progress-bar/interactive-progress-bar.component';

@Component({
  selector: 'ngx-progress-bar',
  imports: [NbCardModule, NbProgressBarModule, InteractiveProgressBarComponent],
  templateUrl: 'progress-bar.component.html',
  styleUrls: ['progress-bar.component.scss'],
})
export class ProgressBarComponent {

}
