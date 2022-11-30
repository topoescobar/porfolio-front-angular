export class JwtDto {
    token!: string; // xq no inicializar vacio ? (=""); 
    type!: string;
    nombreUsuario!: string;
    authorities!: string[]; 
}