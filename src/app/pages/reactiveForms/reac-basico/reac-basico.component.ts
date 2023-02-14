import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reac-basico',
  templateUrl: './reac-basico.component.html',
  styleUrls: ['./reac-basico.component.css']
})
export class ReacBasicoComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  constructor( private fB: FormBuilder) { }

  ngOnInit(): void {
    this.form  = this.fB.group({
      nombre: ['', Validators.required],
      descripcion:['',[Validators.required,Validators.maxLength(20),Validators.minLength(15)]],
      categoria :['',[Validators.required]],
      precio: [, [Validators.required,Validators.min(1),Validators.max(100)]],
      stock: [, [Validators.required,Validators.min(1),Validators.max(100)]],
      marca: ['',[Validators.required]],
      imagenUrl:['',]
    })
  }

  //*touched
  //*pristy
  //*dirty
  //*untouched
  campoValido(campo: string) {
    return this.form.controls[campo]?.errors && this.form.controls[campo]?.touched;
  }

  guardar(){

    if(this.form.invalid){
      this.form.markAllAsTouched();
      return
    }
    console.log('Hola');
    console.log(this.form.value);
    this.form.reset();

  }


}
