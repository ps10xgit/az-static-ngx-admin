import { Component } from '@angular/core';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';

@Component({
  selector: 'ngx-spinner-color',
  imports: [NbCardModule, NbSpinnerModule],
  templateUrl: 'spinner-color.component.html',
})

export class SpinnerColorComponent {
}
