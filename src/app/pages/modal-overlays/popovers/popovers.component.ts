import { Component } from '@angular/core';
import {
  NgxPopoverCardComponent, NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from './popover-examples.component';
import { NbButtonModule, NbCardModule, NbPopoverModule } from '@nebular/theme';

@Component({
  selector: 'ngx-popovers',
  imports: [NbButtonModule, NbCardModule, NbPopoverModule],
  styleUrls: ['./popovers.component.scss'],
  templateUrl: './popovers.component.html',
})
export class PopoversComponent {
  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverFormComponent;
}
