import { Component, OnInit } from '@angular/core';
import { LocalizacionService } from '../localizacion.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  info: any = [];
  cargado: boolean = false;
  coordenadas: any = [2];
  Hora: any;
  Fecha: any;
  constructor(private LocalizacionApi: LocalizacionService) { }

  ngOnInit() {
    this.LocalizacionApi.obtenerUbicacion().subscribe(
      data => {
        this.info = data;
        this.cargado=true;
        this.coordenadas[0] = this.info.longitude;
        this.coordenadas[1] = this.info.latitude;
      },
      error => {
        alert(error);
      }
      );
      this.obtenerHora_Fecha();
  }
  obtenerHora_Fecha(){
    let hoy = new Date();
    this.Hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    this.Fecha = hoy.getDay() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
  }
}
