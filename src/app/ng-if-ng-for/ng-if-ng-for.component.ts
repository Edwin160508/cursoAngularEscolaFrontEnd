import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.css']
})
export class NgIfNgForComponent implements OnInit {

  numero: number;
  constructor() { }

  ngOnInit() {
  }

  obtemNumero(valor:number){
    this.numero = valor;
  }

  apenasNumeros(event){
    const codigoChar = (event.which) ? event.which : event.keyCode;
    if(codigoChar > 31 &&(codigoChar < 48 || codigoChar > 57)){
      return false;
    }
    return true;
  }
}
