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

  constructor(private weatherDataService:WeatherDataService) { }

  ngOnInit() {

    //this.data = {"@attributes":{"id":"28001","version":"1.0"},"origen":{"productor":"Agencia Estatal de Meteorolog\u00eda - AEMET. Gobierno de Espa\u00f1a","web":"http:\/\/www.aemet.es","enlace":"http:\/\/www.aemet.es\/es\/eltiempo\/prediccion\/municipios\/acebeda-la-id28001","language":"es","copyright":"\u00a9 AEMET. Autorizado el uso de la informaci\u00f3n y su reproducci\u00f3n citando a AEMET como autora de la misma.","nota_legal":"http:\/\/www.aemet.es\/es\/nota_legal"},"elaborado":"2019-06-10T12:44:02","nombre":"Acebeda, La","provincia":"Madrid","prediccion":{"dia":[{"@attributes":{"fecha":"2019-06-10"},"prob_precipitacion":[{"@attributes":{"periodo":"00-24"}},{"@attributes":{"periodo":"00-12"}},"0",{"@attributes":{"periodo":"00-06"}},"0","0","0"],"cota_nieve_prov":[{"@attributes":{"periodo":"00-24"}},{"@attributes":{"periodo":"00-12"}},{"@attributes":{"periodo":"12-24"}},{"@attributes":{"periodo":"00-06"}},{"@attributes":{"periodo":"06-12"}},{"@attributes":{"periodo":"12-18"}},{"@attributes":{"periodo":"18-24"}}],"estado_cielo":[{"@attributes":{"periodo":"00-24","descripcion":""}},{"@attributes":{"periodo":"00-12","descripcion":""}},"11",{"@attributes":{"periodo":"00-06","descripcion":""}},"12","11","11"],"viento":[{"@attributes":{"periodo":"00-24"},"direccion":{},"velocidad":{}},{"@attributes":{"periodo":"00-12"},"direccion":{},"velocidad":{}},{"@attributes":{"periodo":"12-24"},"direccion":"NO","velocidad":"20"},{"@attributes":{"periodo":"00-06"},"direccion":"NO","velocidad":"25"},{"@attributes":{"periodo":"06-12"},"direccion":"NO","velocidad":"20"},{"@attributes":{"periodo":"12-18"},"direccion":"NO","velocidad":"20"},{"@attributes":{"periodo":"18-24"},"direccion":"O","velocidad":"15"}],"racha_max":[{"@attributes":{"periodo":"00-24"}},{"@attributes":{"periodo":"00-12"}},{"@attributes":{"periodo":"12-24"}},"40",{"@attributes":{"periodo":"06-12"}},{"@attributes":{"periodo":"12-18"}},{"@attributes":{"periodo":"18-24"}}],"temperatura":{"maxima":"19","minima":"6","dato":["7","16","17","10"]},"sens_termica":{"maxima":"19","minima":"1","dato":["7","16","17","10"]},"humedad_relativa":{"maxima":"100","minima":"25","dato":["90","40","25","40"]},"uv_max":"8"},{"@attributes":{"fecha":"2019-06-11"},"prob_precipitacion":["95","90","10","0","85","10","0"],"cota_nieve_prov":["2100","2200","2100",{"@attributes":{"periodo":"00-06"}},"2200","2100",{"@attributes":{"periodo":"18-24"}}],"estado_cielo":["43","43","13","12n","43","13","11"],"viento":[{"@attributes":{"periodo":"00-24"},"direccion":"NO","velocidad":"40"},{"@attributes":{"periodo":"00-12"},"direccion":"NO","velocidad":"40"},{"@attributes":{"periodo":"12-24"},"direccion":"NO","velocidad":"40"},{"@attributes":{"periodo":"00-06"},"direccion":"NO","velocidad":"20"},{"@attributes":{"periodo":"06-12"},"direccion":"NO","velocidad":"40"},{"@attributes":{"periodo":"12-18"},"direccion":"N","velocidad":"15"},{"@attributes":{"periodo":"18-24"},"direccion":"NO","velocidad":"10"}],"racha_max":["65","65","65","45","65",{"@attributes":{"periodo":"12-18"}},{"@attributes":{"periodo":"18-24"}}],"temperatura":{"maxima":"14","minima":"4","dato":["5","7","12","5"]},"sens_termica":{"maxima":"14","minima":"1","dato":["1","2","12","2"]},"humedad_relativa":{"maxima":"85","minima":"25","dato":["85","65","25","60"]},"uv_max":"8"},{"@attributes":{"fecha":"2019-06-12"},"prob_precipitacion":["0","0","0"],"cota_nieve_prov":[{"@attributes":{"periodo":"00-24"}},{"@attributes":{"periodo":"00-12"}},{"@attributes":{"periodo":"12-24"}}],"estado_cielo":["14","12","15"],"viento":[{"@attributes":{"periodo":"00-24"},"direccion":"S","velocidad":"15"},{"@attributes":{"periodo":"00-12"},"direccion":"S","velocidad":"15"},{"@attributes":{"periodo":"12-24"},"direccion":"S","velocidad":"15"}],"racha_max":[{"@attributes":{"periodo":"00-24"}},{"@attributes":{"periodo":"00-12"}},{"@attributes":{"periodo":"12-24"}}],"temperatura":{"maxima":"19","minima":"2"},"sens_termica":{"maxima":"19","minima":"0"},"humedad_relativa":{"maxima":"85","minima":"20"},"uv_max":"8"},{"@attributes":{"fecha":"2019-06-13"},"prob_precipitacion":["0","0","0"],"cota_nieve_prov":[{"@attributes":{"periodo":"00-24"}},{"@attributes":{"periodo":"00-12"}},{"@attributes":{"periodo":"12-24"}}],"estado_cielo":["12","12","17"],"viento":[{"@attributes":{"periodo":"00-24"},"direccion":"S","velocidad":"15"},{"@attributes":{"periodo":"00-12"},"direccion":"S","velocidad":"15"},{"@attributes":{"periodo":"12-24"},"direccion":"S","velocidad":"15"}],"racha_max":[{"@attributes":{"periodo":"00-24"}},{"@attributes":{"periodo":"00-12"}},{"@attributes":{"periodo":"12-24"}}],"temperatura":{"maxima":"22","minima":"5"},"sens_termica":{"maxima":"22","minima":"5"},"humedad_relativa":{"maxima":"80","minima":"20"},"uv_max":"8"},{"@attributes":{"fecha":"2019-06-14"},"prob_precipitacion":"0","cota_nieve_prov":{},"estado_cielo":"12","viento":{"direccion":"S","velocidad":"20"},"racha_max":{},"temperatura":{"maxima":"20","minima":"7"},"sens_termica":{"maxima":"20","minima":"7"},"humedad_relativa":{"maxima":"80","minima":"20"},"uv_max":"9"},{"@attributes":{"fecha":"2019-06-15"},"prob_precipitacion":"0","cota_nieve_prov":{},"estado_cielo":"14","viento":{"direccion":"NO","velocidad":"15"},"racha_max":{},"temperatura":{"maxima":"19","minima":"5"},"sens_termica":{"maxima":"19","minima":"5"},"humedad_relativa":{"maxima":"75","minima":"30"}},{"@attributes":{"fecha":"2019-06-16"},"prob_precipitacion":"0","cota_nieve_prov":{},"estado_cielo":"11","viento":{"direccion":"NO","velocidad":"10"},"racha_max":{},"temperatura":{"maxima":"23","minima":"6"},"sens_termica":{"maxima":"23","minima":"6"},"humedad_relativa":{"maxima":"65","minima":"25"}}]}}
    this.getData();

  }

  getDay(day:number){


  }

   sumarDias(fecha, dias){

  }

  setDays(){


  }

  getData(){
    this.weatherDataService.getData()
    .subscribe(apiData => {
      this.data = apiData;
      this.province = this.data.provincia;
      console.log(this.data)
      this.date =  new Date(this.data.elaborado.split('T')[0]);
      this.setDays();
    });
    
  }
}
