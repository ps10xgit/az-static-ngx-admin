import { Component } from '@angular/core';
import { NbActionsModule, NbCardModule, NbComponentShape, NbComponentSize, NbComponentStatus, NbIconModule, NbUserModule } from '@nebular/theme';

@Component({
  selector: 'ngx-buttons',
  imports: [NbActionsModule, NbCardModule, NbIconModule, NbUserModule],
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
