import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  listaExp: Experiencia[] = [];
  constructor(private experienciaServ: ExperienciaService, private tokenServ: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenServ.getToken()) {
      this.isLogged =true;
    } //else {this.isLogged=false;}
  }

  cargarExperiencia(): void {
    this.experienciaServ.lista().subscribe(data => {this.listaExp = data})
  }

  delete(id?: number) {
    if(id != undefined) {
      this.experienciaServ.delete(id).subscribe(
        data => { this.cargarExperiencia(); },
        //err => {alert("No se pudo borrar la experiencia");}
      )
    }
  }

}
