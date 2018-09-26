import { Component, OnInit } from '@angular/core';

declare var window: any;
var a: any;

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { 
    window.vanillaToAngularCallback = function(){
      alert("desde angular");
      // communicate with other Angular providers
      // window.angularToVanillaCallback();
    }  
  }

  ngOnInit() {
    window.angularToVanillaCallback();
    window.angularToVanillaCallback();    
  }

  wachu(){
    return "wachu";
  }

}
