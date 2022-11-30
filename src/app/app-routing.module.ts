import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarExperienciaComponent } from './componentes/portafolio/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/portafolio/nueva-experiencia/nueva-experiencia.component';

 //array de rutas virtuales
const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'login',component:LoginComponent },
  {path: 'nuevaexp', component:NuevaExperienciaComponent},
  {path: 'editexp/:id', component:EditarExperienciaComponent}
  //{path:'', redirectTo:'login', pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

