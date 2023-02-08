import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.css']
})
export class FormBasicoComponent implements OnInit {


  @ViewChild('myform') miform!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardarProducto(formulario: NgForm){
    console.log('btn de guuardar producto' ,this.miform);
    console.log(this.miform.value);
    if(this.miform.valid){
      console.log('enviando infor', this.miform.value);
      this.miform.resetForm();
    } else{
      return;
    }

  }

  nombreValido(){
    // console.log(this.miform?.controls['nombreProduct0']?.value.lenght);

    return this.miform?.controls['nombreProducto']?.touched &&
          this.miform?.controls['nombreProducto'].value.length <6 ||
          this.miform?.controls['nombreProducto'].value.length > 20
    // this.miform?.controls['nombreProducto']?.invalid &&
    // this.miform?.controls['nombreProducto']?.touched
    // this.miform.controls
  }

  precioValido(){
    return this.miform?.controls['precio']?.touched &&
    this.miform?.controls['precio'].value <1
  }

  stockValido(){
    return this.miform?.controls['stock']?.touched &&
    this.miform?.controls['stock'].value < 1 ||
    this.miform?.controls['stock'].value > 1000
  }

  descripcionValido(){
    return this.miform?.controls['descripcion']?.touched &&
    this.miform?.controls['descripcion'].value.length > 50
  }

}
