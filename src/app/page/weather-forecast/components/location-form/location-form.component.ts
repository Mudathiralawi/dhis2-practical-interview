import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherApiService } from 'src/app/service/weather-api.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {

  weatherForm: FormGroup;
  autocompleteGPlace: google.maps.places.Autocomplete | undefined;
  weacherApi = inject(WeatherApiService);

  @ViewChild('locationRef') locationRef: any = ElementRef ;

  constructor(private formBuilder: FormBuilder) {
    this.weatherForm = this.formBuilder.group({
      location: ['', [Validators.required]]
    });
  }

  ngAfterViewInit() {
    const options: google.maps.places.AutocompleteOptions = {};
    this.autocompleteGPlace = new google.maps.places.Autocomplete(this.locationRef.nativeElement, options);
    this.autocompleteGPlace.addListener('place_changed', () => {
      const selectedPlace = this.locationRef.nativeElement.value;
      const firstPart = selectedPlace.split(',')[0].trim();
      this.weatherForm.patchValue({
        location: firstPart
      });
    });
  }

  ngOnInit(): void {

  }

  checkWeather() {
    this.weacherApi.checkWeather(this.weatherForm.get('location')?.value);
  }
}
