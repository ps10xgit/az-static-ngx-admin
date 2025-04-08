import { Component } from '@angular/core';
import { NbAlertModule, NbCardModule } from '@nebular/theme';

@Component({
  selector: 'ngx-alert',
  imports: [NbAlertModule, NbCardModule],
  templateUrl: 'alert.component.html',
})
export class AlertComponent {

}
