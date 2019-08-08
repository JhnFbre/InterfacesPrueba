import { Component, OnInit } from '@angular/core';
import { EspolService } from '../servicios/espol.service'

import { PersonService } from '../../../../../client/src/app/components/servicios/person.service';
import { Person } from '../../../../../client/src/app/components/models/Person';
//import { Person } from '../../models/person';


declare var require: any
declare var M: any;

@Component({
  selector: 'app-espol-list',
  templateUrl: './espol-list.component.html',
  styleUrls: ['./espol-list.component.css'],
  providers: [ PersonService ]
})
export class EspolListComponent implements OnInit {
  espols:any = [];
  people:any = [];
  
  constructor(private espolService: EspolService, private personService: PersonService) { }

  ngOnInit() {
    this.getGames();
    this.getPersonas();
  }
  getGames(){
    this.espolService.getEspol().subscribe(
      res=> {
        this.espols = res;
        console.log(this.espols);
      },
      err=> console.error(err)
      );
  }

   getPersonas(){
    this.personService.getPerson()
      .subscribe(res => {
        this.people = res;
        console.log(this.people);
      });

  }


  migrarEspol(){
    
    var pep = new PersonService(this.people);
    console.log(pep);
    var ps = new PersonService(this.people);
    alert("Gondola");

    //var bdMerged = JSON.stringify(this.espols);
    //console.log("Base merge " + bdMerged);

    //Recorrer la base de mysql
    this.espols.forEach(function (persona) {
      if(persona){

        console.log(persona);
       
         /*Guardar en Mongo
         ps.postPerson(persona)
        .subscribe(res => {
          //this.getGames(); //Personas
          this.getPersonas();
          //lep.getPerson();
          M.toast({html: 'Save successfully'});
        }); 
 */
      }
      
    }); 

    /*for (let i = 0; i < this.espols.length; i++) { 
     console.log(this.espols[i]);
    }
    */
  


    /*


    if(persona){
        this.personaService.postPersona(this.espols[i])
        .subscribe(res => {
          this.getPersonas();
          this.resetForm(form);
          M.toast({html: 'Save successfully'});
        });
    }
*/


  

    //var jsonfile = require('jsonfile')
    /*var json_data = require('../../../assets/Data/personas.json');
    var obj;
    json_data.readFile(json_data, 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      console.log("Contenido: ", obj)
    });
    */






  /*  
   var fs = require('fs');

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); */
  }


}
