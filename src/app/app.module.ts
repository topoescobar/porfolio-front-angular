import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ModalsComponent } from './componentes/portafolio/modals/modals.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './servicios/interceptor.service';
import { NuevaExperienciaComponent } from './componentes/portafolio/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/portafolio/editar-experiencia/editar-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    PortafolioComponent,
    AboutComponent,
    HeaderComponent,
    ModalsComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({ //modulo para circulos de progreso 
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvider], //cookies
  bootstrap: [AppComponent]
})
export class AppModule { }

