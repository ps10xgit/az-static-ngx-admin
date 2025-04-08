import { Component } from '@angular/core';
import { PositionModel } from './entity/position.model';
import { NbCardModule } from '@nebular/theme';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'ngx-search-map',
  imports: [NbCardModule, MapComponent, SearchComponent],
  templateUrl: './search-map.component.html',
})
export class SearchMapComponent {
  searchedPosition: PositionModel = new PositionModel();

  setPosition(position: PositionModel) {
    this.searchedPosition = position;
  }
}
