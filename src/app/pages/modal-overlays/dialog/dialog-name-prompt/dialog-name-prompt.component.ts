import { Component } from '@angular/core';
import { NbCardModule, NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-name-prompt',
  imports: [NbCardModule],
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
})
export class DialogNamePromptComponent {

  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
