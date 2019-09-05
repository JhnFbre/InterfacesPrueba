import { Component, OnInit } from '@angular/core';
import { EspolService } from '../servicios/espol.service';
import { PersonaService } from '../servicios/persona.service';
import { Persona } from '../models/Persona';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Espol } from '../models/Espol';

@Component({
  selector: 'app-espol-list',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  gat0="GatpPuto";
  personaEspol: Persona={
    identificacion:"",
    cedula: "",
    nombre: "",
    apellido: ""
  }
  espols:any = [];
  constructor(private espolService: EspolService, private personaService:PersonaService) { }

  ngOnInit() {
    this.getSQlBase();
  }
  getSQlBase(){
    this.espolService.getEspol().subscribe(
      res=> {
        this.espols = res;
        console.log("Base de Datos de ESPOL");
        console.log(this.espols);
      },
      err=> console.error(err)
      );
  }
  cargarPersonaEspol(_id: string){
    console.log("Code: "+_id);
    this.espolService.getPersonaEspol(_id)
      .subscribe(res => {
        for (var perso of this.espols) {
          if(perso.cedula==_id){
            this.personaEspol=perso;
            var juguete: Persona={
              identificacion:perso.identificacion,
              cedula: perso.cedula,
              nombre: perso.nombres,
              apellido: perso.apellidos
            }
            this.personaEspol=juguete;
            this.espolService.selectedPersona=juguete;
            console.log(this.espolService.selectedPersona);
          }
        }
      
      });
  }
   resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      //this.espolService.selectedPersona.Apellido="";
    }
  } 

}
