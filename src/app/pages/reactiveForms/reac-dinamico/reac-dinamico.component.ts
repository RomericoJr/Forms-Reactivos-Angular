import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reac-dinamico',
  templateUrl: './reac-dinamico.component.html',
  styleUrls: ['./reac-dinamico.component.css']
})
export class ReacDinamicoComponent implements OnInit {

  nuevoToping: FormControl = this.fb.control('',Validators.required);
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



  ngOnInit(): void {
  }

  get arrayToppings(){
    return this.formDinamico.get('toppings') as FormArray;
  }

  agregar(){
    if(this.nuevoToping.invalid){
      return;
    }
    this.arrayToppings.push(this.fb.control(this.nuevoToping.value,Validators.required));
    this.nuevoToping.reset();
  }

  eliminar(i:number){
    this.arrayToppings.removeAt(i);
  }

  guardarTodo(){}
}
