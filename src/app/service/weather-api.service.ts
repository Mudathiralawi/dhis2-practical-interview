import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StateService } from '../state/state.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  state = inject(StateService);
  weatherResults: any;
  errorResult: any;

  constructor(private http: HttpClient) { }

  async checkWeather(location: string) {
    this.state.loading = true;
    const weatherWebsite = `http://api.weatherstack.com/current?access_key=21303c565281d1a4fc2666cfcb1ca23e&query=` + location;
    this.http.get(weatherWebsite).subscribe({
      next: (data) => {
        this.state.loading = false;
        this.state.weatherData = data;
        this.state.error = '';
      },
      error: (error) => {
        console.log(error);
        this.state.loading = false;
        this.state.error = error;
        this.state.weatherData = '';
      }
    });
  }

}