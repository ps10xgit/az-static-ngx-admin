import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { RouterOutlet } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  imports: [NbMenuModule, RouterOutlet],
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
