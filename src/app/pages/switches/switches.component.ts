import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  constructor() { }

  cliente = {
    genero: 'M',
    bebida: 'R',
    mascota: 'P',
    color:'A',
    postre: 'N',
    calzado:'Z',
    promociones: true,

    lenguajes: {
      java: false,
      php: false,
      python: false,
      javascript: false,
      ruby: false,
      c: false,
    },
  }
  terminosYCondiciones: boolean = false;



  ngOnInit(): void {
  }

  guardar(form:NgForm){
    console.log('sirve');
    console.log(this.cliente);



  }

}
