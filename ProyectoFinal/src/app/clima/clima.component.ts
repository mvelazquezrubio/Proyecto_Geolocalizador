import { Component, OnInit, Input } from '@angular/core';
import { LocalizacionService } from '../localizacion.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  info: any = [];
  @Input() lat_lon: any = [];
  actual:any =[];
  cargado:boolean=false;
  constructor(private LocalizacionApi: LocalizacionService) { }

  ngOnInit() {
    this.LocalizacionApi.obtenerClima(this.lat_lon[0],this.lat_lon[1]).subscribe(
      data => {
        this.info = data;
        this.formatoClima();
        this.cargado=true;
      },
      error => {
        alert(error);
      }
      );
  }

  formatoClima(){
    for(let pronostico of this.info.dataseries){
      //Formateamos la fecha.
      let fecha;
      fecha = pronostico.date+"";
      pronostico.date = fecha.substring(6,8) + "/" + fecha.substring(4,6) + "/" + fecha.substring(0,4);
      //Obtenemos el nombre del dia de la semana.
      let days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
      let d = new Date(fecha.substring(4,6)+'/'+fecha.substring(6,8)+"/"+fecha.substring(0,4));
      //Debido a que la variable wind10m_max no se usa, guardaremos el dia correspondiente en ella.
      pronostico.wind10m_max = days[d.getUTCDay()];
    }
    //Quito el primero
    this.actual=this.info.dataseries.shift();
    console.log("ACTUAL:",this.actual);
  }

}
