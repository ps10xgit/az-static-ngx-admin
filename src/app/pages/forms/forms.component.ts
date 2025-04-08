import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ngx-form-elements',
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class FormsComponent {
}
