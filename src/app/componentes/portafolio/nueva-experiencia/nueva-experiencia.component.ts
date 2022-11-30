import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string= '';
  constructor(private expService:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const trabajo =  new Experiencia(this.nombreExp, this.descripcionExp);
    this.expService.save(trabajo).subscribe(
      data=>{alert('Experiencia añadida');
      this.router.navigate(['']);
    }/*, err => {
      alert("Error");
      this.router.navigate(['']);
    }*/
    )
  }
}
