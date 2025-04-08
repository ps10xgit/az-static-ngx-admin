import { Component } from '@angular/core';
import { NbCardModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';

@Component({
  selector: 'ngx-spinner-in-tabs',
  imports: [NbCardModule, NbSpinnerModule, NbTabsetModule],
  templateUrl: 'spinner-in-tabs.component.html',
  styleUrls: ['spinner-in-tabs.component.scss'],
})

export class SpinnerInTabsComponent {

  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);
  }
}
