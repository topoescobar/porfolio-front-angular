export class Experiencia {
    id? : number;
    nombreExp: string;
    descripcionExp: string;

    constructor(exp: string, descricion: string) {
        this.nombreExp = exp;
        this.descripcionExp = descricion;
    }
}
