import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  loading: boolean = false;
  error: any = '';
  weatherData: any = '';

}
