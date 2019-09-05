import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';

import { Espol } from '../models/Espol';
import { Persona } from '../models/Persona';
@Injectable({
  providedIn: 'root'
})
export class EspolService {
  selectedPersona: Persona;
  API_URI = 'http://localhost:3000/api/espol';
  
  constructor(private http: HttpClient) { 

  }
  getEspol(){
    return this.http.get(this.API_URI);
  }
  getPersonaEspol(_id: string){
    return this.http.get(this.API_URI+ `/${_id}`);
  }
}
