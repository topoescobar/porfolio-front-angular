import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorsServiceService {

  constructor() { }

  response(code: string){
    switch (code) {
      case 'auth/email-already-in-use': return 'El email ya esta registrado'
      case 'auth/invalid-email': return 'Formato de email inválido'
      case 'auth/weak-password': return 'Contraseña débil, usar al menos 6 caracteres'
      case 'auth/wrong-password': return 'La contraseña es incorrecta'
      case 'auth/user-not-found': return 'Email y contraseña no coinciden'
      default: return 'error desconocido'
    }
  }
}
