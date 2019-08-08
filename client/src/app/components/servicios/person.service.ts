import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';

import { Person } from '../models/Person'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  //selectedPerson: Person;
  personas: Person[];

  API_URI = 'http://localhost:4000/api/personas';
  
  constructor(private http: HttpClient) { 
    //this.selectedPerson = new Person();
  }
  getPerson(){
    //return this.http.get(`${this.API_URI}/personas`);
    return this.http.get(this.API_URI);
  }

  postPerson(person: Person) {
    return this.http.post(this.API_URI, person);
  }

   

}
