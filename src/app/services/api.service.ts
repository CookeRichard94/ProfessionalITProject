import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = "&APPID=ca04f99ecbe62ca133d93a25790dc42d";

  constructor(private http: HttpClient) { }

  getWeatherData(city: String): Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city + this.apiKey);
  }



}
