//crear las clases de la base de datos con sus atributos y metodos
export class Persona {
    id?: number;
    nombre: string;
    apellido: string; 
    img: string;

    constructor(nombreCons: string, apellidoCons: string, imgCons: string){
        this.nombre = nombreCons;
        this.apellido = apellidoCons;
        this.img = imgCons;
        
    }
}