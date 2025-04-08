import { Component, ViewChild } from '@angular/core';
import { NbAccordionModule, NbCardModule } from '@nebular/theme';

@Component({
  selector: 'ngx-accordion',
  imports: [NbAccordionModule, NbCardModule],
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
})
export class AccordionComponent {

  @ViewChild('item', { static: true }) accordion;

  toggle() {
    this.accordion.toggle();
  }
}
