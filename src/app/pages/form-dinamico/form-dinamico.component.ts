import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

interface Order{
 nombre: string;
 toppings: toping[];
}

interface toping {
  id:number;
  nombre: string;
}

@Component({
  selector: 'app-form-dinamico',
  templateUrl: './form-dinamico.component.html',
  styleUrls: ['./form-dinamico.component.css']
})
export class FormDinamicoComponent implements OnInit {

numer : number = 0;
nuevoToping: FormControl = this.fb.control('',Validators.required);
bool!: boolean ;

formDinamico: FormGroup= this.fb.group({
  orden : ['Tacos',[Validators.required, Validators.minLength(3)]],
  toppings: this.fb.array([
    ['sin cebolla', Validators.required],
    ['Sin salsa', Validators.required]
  ], Validators.required)
});

  constructor(
    private fb: FormBuilder,
  ) { }

  listaOrden: Order= {

    nombre: 'Tlayuda',
    toppings : [
      {
      id: 1,
      nombre: "Sin lechuga"
    },
    {
    id: 2,
    nombre: "Exrta quesillo"
  },
  {
    id: 3,
    nombre: "SIn asiento"
  }
]
  }

  ngOnInit(
  ): void {
  }

  observar(){

    if(this.listaOrden.toppings.length > 1){
      console.log('no hay');

      this.bool = false;
      console.log(this.bool);

    } else{
      console.log('si hay');
      this.bool = true;
      console.log(this.bool);


    }
  }

  guardar(formDinamico: FormGroup){
    console.log('sirve');
    console.log(this.listaOrden);


  }
  eliminar(id: number){
    console.log('soy btn eliminar', id);
    this.observar();
      this.listaOrden.toppings.splice(id, 1);
    }

  // agregar(txt: string){
  agregar(){

    // this.numer = this.listaOrden.toppings.length;


    // const nuevoT: toping = {
    //   id : this.numer +1 ,
    //   nombre : this.nuevoToping
    // }
    // this.listaOrden.toppings.push(nuevoT);
    // this.nuevoToping= '';


    // console.log(this.numer);
    // // console.log('Se agregara', );
  }

get arrayToppings(){
  return this.formDinamico.get('toppings') as FormArray;
}

}
