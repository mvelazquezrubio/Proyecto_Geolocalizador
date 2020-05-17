import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { mergeMap,map, concatAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  urlLocalizacion = 'http://api.ipstack.com/check?access_key=00f627b624ed4c76cb92fc0197c47c51';
  urlClima = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json';
  

  constructor(private http: HttpClient) { }

  obtenerUbicacion(){
    return this.http.get(this.urlLocalizacion);
  }
  obtenerClima(longitud,latitud){
    return this.http.get(`http://www.7timer.info/bin/api.pl?lon=${longitud}&lat=${latitud}&product=civillight&output=json`);
  }
}

/*RXJS
Observable
mergeMap
map
pipe
combinators*/