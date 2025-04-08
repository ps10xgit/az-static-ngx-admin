import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { EarningCardBackComponent } from './back-side/earning-card-back.component';
import { EarningCardFrontComponent } from './front-side/earning-card-front.component';

@Component({
  selector: 'ngx-earning-card',
  imports: [NbCardModule, NbIconModule, EarningCardBackComponent, EarningCardFrontComponent],
  styleUrls: ['./earning-card.component.scss'],
  templateUrl: './earning-card.component.html',
})
export class EarningCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
