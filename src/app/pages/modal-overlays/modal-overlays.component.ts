import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ngx-modal-overlays',
  imports: [RouterOutlet], 
  template: `
    <router-outlet></router-outlet>
  `,
})

export class ModalOverlaysComponent {
}
