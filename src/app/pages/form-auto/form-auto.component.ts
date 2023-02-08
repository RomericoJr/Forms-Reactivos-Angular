import { Component, OnInit } from '@angular/core';
import { Autoi, problemasAuto } from 'src/app/interface/autoi';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-auto',
  templateUrl: './form-auto.component.html',
  styleUrls: ['./form-auto.component.css']
})
export class FormAutoComponent implements OnInit {

  newProblem: string ='';
  idNumer!:number ;
  arrayColores = [
    'rojo',
    'negro',
    'blanco',
    'rosa',
    'morado',
    'verde',
    'azul'

  ];

//crear array de colores


  constructor() { }

  listaAuto : Autoi = {
    nombre: 'Tsuru',
    marca:'Nissan',
    modelo: '2007',
    color: 'rojo',
    numeroDeSerie: 123456,
    problemas: [
      {
        id:1,
        descripcion: 'Falla tubo de escape'
      },
      {
        id:2,
        descripcion: 'Puerta rota'
      },
      {
        id:3,
        descripcion: 'Llanta ponchada'
      }
    ],
  }

  agregar(formC:NgForm){
console.log('agregar');
console.log(this.listaAuto);

  }

  agregarP(){
    console.log('agregarP');
    this.idNumer = this.listaAuto.problemas.length;

    const nuevoP: problemasAuto = {
      id: this.idNumer + 1,
      descripcion: this.newProblem
    };
    this.listaAuto.problemas.push(nuevoP);
    this.newProblem = '';
    console.log(this.idNumer);

  }
  eliminar(id:number){
    console.log('eliminar',id);
    console.log('eliminando',this.listaAuto.problemas[id]);
    this.listaAuto.problemas.splice(id,1)


  }

  ngOnInit(): void {
  }

}
