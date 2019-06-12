import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service' ;
import { Config } from 'protractor';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  data: any;
  province: string;
  date: Date;
  predictions:Array<any>;
  months:Array<any>;
  days:Array<any>;
  constructor(private weatherDataService:WeatherDataService) {
    //this.data =[];
    this.predictions = [];
   }

  ngOnInit() {

    this.getData();

    this.months = [
      {value:0, name:"Enero"},
      {value:1, name:"Febrero"},
      {value:2, name:"Marzo"},
      {value:3, name:"Abril"},
      {value:4, name:"Mayo"},
      {value:5, name:"Junio"},
      {value:6, name:"Julio"},
      {value:7, name:"Agosto"},
      {value:8, name:"Septiembre"},
      {value:9, name:"Octubre"},
      {value:10, name:"Noviembre"},
      {value:11, name:"diciembre"}
    ];

    this.days = [
      {value:1, name:"Lunes"},
      {value:2, name:"Martes"},
      {value:3, name:"Miercoles"},
      {value:4, name:"Jueves"},
      {value:5, name:"Viernes"},
      {value:6, name:"Sabado"},
      {value:7, name:"Domingo"}
    ]
  }

  getDay(day:any){

    var date = new Date(day['@attributes'].fecha);
    return this.days[date.getDay()].name + " " + date.getDate() + " de " +this.months[date.getUTCMonth()].name + " " +date.getFullYear();

  }

  getData(){
    this.weatherDataService.getData()
    .subscribe(apiData => {
      this.data = apiData;
      this.predictions = this.data.prediccion.dia;
      this.province = this.data.provincia;
      console.log(this.data)
      this.date =  new Date(this.data.elaborado.split('T')[0]);
    });
    
  }
}
