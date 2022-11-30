import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  titulo1="Ing. Agronómica - Universidad Nacional de Cuyo"
  titulo2="Ingles - nivel b2"
  descripcion1_0="Estudiante avanzado en la carrera de Ingenieria Agronomica"
  descripcion1_1="Perteneciente a la Facultad de Ciencias Agrarias de la Universidad Nacional de Cuyo"

  constructor() { }

  ngOnInit(): void {
  }

  modificarTitulo1(){
    
  }
}
