import { NgModule } from '@angular/core';
import { NbMenuModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LayoutRoutingModule } from './layout/layout-routing.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
})
export class PagesModule {
}
