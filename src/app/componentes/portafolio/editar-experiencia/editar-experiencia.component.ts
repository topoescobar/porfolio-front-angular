import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expLaboral : Experiencia = null //usamos strictNullChecks:false en tsconfig.json 
  constructor(private expService:ExperienciaService, private activatedRoute:ActivatedRoute, private ruter:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']; //captura el id
    this.expService.detail(id).subscribe(
      data =>{
        this.expLaboral = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.ruter.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.update(id, this.expLaboral).subscribe(
      data => {
        this.ruter.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.ruter.navigate(['']);
      }
    )
  }

}
