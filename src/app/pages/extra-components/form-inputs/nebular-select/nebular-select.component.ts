import { Component } from '@angular/core';
import { NbCardModule, NbOptionModule, NbSelectModule } from '@nebular/theme';

@Component({
  selector: 'ngx-nebular-select',
  imports: [NbCardModule, NbOptionModule, NbSelectModule],
  templateUrl: 'nebular-select.component.html',
  styleUrls: ['nebular-select.component.scss'],
})
export class NebularSelectComponent {

  commonSelectedItem = '2';
  selectedItem;
}
