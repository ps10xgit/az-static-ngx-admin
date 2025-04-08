import { Component } from '@angular/core';
import { PositionModel } from './entity/position.model';
import { NbCardModule, NbSearchModule } from '@nebular/theme';

@Component({
  selector: 'ngx-search-map',
  imports: [NbCardModule, NbSearchModule],
  templateUrl: './search-map.component.html',
})
export class SearchMapComponent {
  searchedPosition: PositionModel = new PositionModel();

  setPosition(position: PositionModel) {
    this.searchedPosition = position;
  }
}
