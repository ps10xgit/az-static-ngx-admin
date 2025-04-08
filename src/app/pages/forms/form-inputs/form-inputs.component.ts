import { Component } from '@angular/core';
import { NbCardModule, NbCheckboxModule, NbOptionModule, NbRadioModule, NbSelectModule } from '@nebular/theme';

@Component({
  selector: 'ngx-form-inputs',
  imports: [NbCardModule, NbCheckboxModule, NbOptionModule, NbSelectModule],
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
}
