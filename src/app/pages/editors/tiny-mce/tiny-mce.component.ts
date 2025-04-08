import { Component } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { TinyMCEComponent } from '../../../@theme/components';

@Component({
  selector: 'ngx-tiny-mce-page',
  imports: [NbCardModule, TinyMCEComponent],
  template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <ngx-tiny-mce></ngx-tiny-mce>
      </nb-card-body>
    </nb-card>
  `,
})
export class TinyMCEPage {
}
