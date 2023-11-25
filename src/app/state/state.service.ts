import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  loading: boolean = false;
  error: any = '';
  weatherData: any = '';
  mapCenter: google.maps.LatLngLiteral = { lat: 48.8588445, lng: 2.2943506 };

}
