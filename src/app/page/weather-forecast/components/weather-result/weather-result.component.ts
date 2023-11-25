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

}
