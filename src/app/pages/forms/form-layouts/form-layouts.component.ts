import { Component } from '@angular/core';
import { NbCardModule, NbCheckboxModule, NbFormFieldModule, NbRadioModule } from '@nebular/theme';

@Component({
  selector: 'ngx-form-layouts',
  imports: [NbCardModule, NbCheckboxModule, NbFormFieldModule, NbRadioModule],
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {

}
