import { Component, OnInit } from '@angular/core';
//para usar el enrutamiento
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params)=> {
      //const nombre = params.nombre.toString();
      //logica....
    });
  }

}
