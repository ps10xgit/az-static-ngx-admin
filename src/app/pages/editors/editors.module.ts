import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { ThemeModule } from '../../@theme/theme.module';

import { EditorsRoutingModule } from './editors-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    EditorsRoutingModule,
    CKEditorModule,
  ],
})
export class EditorsModule { }
