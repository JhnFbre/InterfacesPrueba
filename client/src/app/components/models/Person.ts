
export class Person {

    constructor(Id_Persona = '', Id_Institucion = '', Cedula = '', Nombre ='',Apellido='') {
        this.Id_Persona = Id_Persona;
        this.Id_Institucion = Id_Institucion;
        this.Cedula = Cedula;
        this.Nombre = Nombre;
        this.Apellido = Apellido;

        
    }


    Id_Persona?: string;
    Id_Institucion?: string;
    Cedula?: string;
    Nombre?: string;
    Apellido?: string;
};