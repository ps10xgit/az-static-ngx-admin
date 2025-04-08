import { Component } from '@angular/core';
import { NbCardModule, NbSearchModule } from '@nebular/theme';

@Component({
    selector: 'ngx-search-fields',
    imports: [NbCardModule, NbSearchModule],
    templateUrl: 'search-fields.component.html',
})
export class SearchComponent {
}
