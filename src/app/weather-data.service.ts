import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  configUrl = 'https://www.el-tiempo.net/api/json/v1/provincias/28/municipios/28004/weather';
  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.configUrl);
  }
}
