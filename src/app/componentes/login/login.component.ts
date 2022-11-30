import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseErrorsServiceService } from 'src/app/servicios/firebase-errors-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false; 
  // loginUsuario!: LoginUsuario;
  // nombreUsuario!: string;
  // password!: string;
  // roles: string[] = [];
  // errMsg!: string;

  loginForm: FormGroup;
  

  constructor(private formBuilder:FormBuilder, private ngFireAuth: AngularFireAuth,  
    private router:Router, private fbError:FirebaseErrorsServiceService) {
      this.loginForm = formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
   }

  ngOnInit(): void {
  }

  login(): void{
    let emailIngresado = this.loginForm.value.email;
    let passIngresada = this.loginForm.value.password;
    //console.log(emailIngresado, passIngresada);
    //this.cargando = true;
    this.ngFireAuth.signInWithEmailAndPassword(emailIngresado, passIngresada).then(() => {
      console.log("inicio exitoso"); //usar con then((user)...
      this.router.navigate(['']);
    }) .catch((error) =>{
      //this.cargando = false;
      console.log(error);
      //this.toastr.error(this.fbError.response(error.code), 'ERROR')
    })
  }

}
