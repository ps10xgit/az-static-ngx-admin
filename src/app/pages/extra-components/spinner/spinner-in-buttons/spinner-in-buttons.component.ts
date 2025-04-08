import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';

@Component({
  selector: 'ngx-spinner-in-buttons',
  imports: [FormsModule, NbCardModule, NbSpinnerModule],
  templateUrl: 'spinner-in-buttons.component.html',
  styleUrls: ['spinner-in-buttons.component.scss'],
})

export class SpinnerInButtonsComponent {

  loadingLargeGroup = false;
  loadingMediumGroup = false;

  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = true;

    setTimeout(() => this.loadingLargeGroup = false, 3000);
  }

  toggleLoadingMediumGroupAnimation() {
    this.loadingMediumGroup = true;

    setTimeout(() => this.loadingMediumGroup = false, 3000);
  }
}
