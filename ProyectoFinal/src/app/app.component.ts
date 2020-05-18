import { Component, OnInit } from '@angular/core';
import { LocalizacionService } from './localizacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Geolocalizador';
  constructor(private LocalizacionApi: LocalizacionService) { }

  ngOnInit() {
  }

}
