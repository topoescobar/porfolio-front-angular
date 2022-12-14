import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL= 'http://localhost:8080/auth/' 
  //authURL =  'https://heroku-ivangarcia.herokuapp.com/auth/';

  constructor(private http: HttpClient) { }
   
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post<any>(this.authURL+'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<any> {
    return this.http.post<JwtDto>(this.authURL+'login',loginUsuario)
  }
}
