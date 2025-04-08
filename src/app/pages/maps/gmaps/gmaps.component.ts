import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NbCardModule } from '@nebular/theme';

@Component({
  selector: 'ngx-gmaps',
  imports: [GoogleMapsModule, NbCardModule],
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})
export class GmapsComponent {
  readonly position = { lat: 51.678418, lng: 7.809007 };
}
