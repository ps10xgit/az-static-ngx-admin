import { Component } from '@angular/core';

@Component({
  selector: 'ngx-components',
  standalone: false,
  template: `
    <router-outlet></router-outlet>
  `,
})
export class ExtraComponentsComponent {
}
