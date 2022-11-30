export class LoginUsuario {    
    nombreUsuario: string;
    password: string;

    constructor(userName: string, pass: string) {
        this.nombreUsuario = userName;
        this.password = pass;
    }
}