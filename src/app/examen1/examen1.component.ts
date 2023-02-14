import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-examen1',
  templateUrl: './examen1.component.html',
  styleUrls: ['./examen1.component.css']
})
export class Examen1Component implements OnInit {


  public form: FormGroup = new FormGroup({});
  arrayEstados = [
    'Mexico',
    'Chihuahua',
    'Puebla',
    'Sinaloa',
    'Tijuana'
  ];
  constructor(
    private formB: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formB.group({
      user: ['ROme', [Validators.required,Validators.minLength(4)]],
      apellidoP: ['',Validators.required],
      apellidoM: [''],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      calle: ['', Validators.required],
      numero: ['', [Validators.required,Validators.length > 999]],
      estado: ['', Validators.required]

    })
  }


  campoValido(campo: string) {
    return this.form.controls[campo]?.errors && this.form.controls[campo]?.touched;
  }
  // nombre: ['', Validators.required],
  // descripcion:['',[Validators.required,Validators.maxLength(20),Validators.minLength(15)]],
  // categoria :['',[Validators.required]],
  // precio: [, [Validators.required,Validators.min(1),Validators.max(100)]],
  // stock: [, [Validators.required,Validators.min(1),Validators.max(100)]],
  // marca: ['',[Validators.required]],
  // imagenUrl:['',]

  guardar(){

  }

}
