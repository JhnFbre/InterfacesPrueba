import { Component, OnInit } from '@angular/core';
import { EspolService } from '../servicios/espol.service'


@Component({
  selector: 'app-espol-list',
  templateUrl: './espol-list.component.html',
  styleUrls: ['./espol-list.component.css']
})
export class EspolListComponent implements OnInit {
  espols:any = [];
  constructor(private espolService: EspolService) { }

  ngOnInit() {
    this.getGames();
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
  migrarEspol(){
   alert("Gondola");
   var fs = require('fs');

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  }


}
