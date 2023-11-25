import { Component, inject } from '@angular/core';
import { StateService } from 'src/app/state/state.service';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.scss']
})
export class WeatherResultComponent {

  state = inject(StateService);
  zoom = 10;

  mapCenter: google.maps.LatLngLiteral | undefined;

  ngOnInit() {

    this.mapCenter = {
      lat: parseFloat(this.state.weatherData.location.lat),
      lng: parseFloat(this.state.weatherData.location.lon),
    };
  }

}
