import { Injectable } from '@angular/core';
//la decoracion @inyectable va a permitir que sea consumida por los compponentes
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() {}

  //crear metodo obtener datos
  obtenerDatos(){
    console.log("el servicio portfolio esta funcionando");
  }
}
