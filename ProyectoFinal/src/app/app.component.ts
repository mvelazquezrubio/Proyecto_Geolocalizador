import { Component, OnInit } from '@angular/core';
import { LocalizacionService } from './localizacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProyectoFinal';
  info: any = [];
  clima: any = [];
  constructor(private LocalizacionApi: LocalizacionService) { }

  ngOnInit() {
   /* this.LocalizacionApi.obtenerUbicacion().subscribe(
      data => {
        this.info = data;
        console.log("DATA1:",data);
      },
      error => {
        alert(error);
      }
    );*/
  /*  this.LocalizacionApi.obtenerUbicacion2(this.info.latitude, this.info.longitude).subscribe(
      data => {
        this.clima = data;
        console.log("DATA:",data);
      },
      error => {
        alert(error);
      }
    );*/
  }

}
