import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ngx-components',
  standalone: false,
  template: `
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent {
}
