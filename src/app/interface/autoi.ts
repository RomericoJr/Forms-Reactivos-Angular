export interface problemasAuto {
  id:number;
  descripcion: string;
}

export interface Autoi {
  nombre: string;
  marca: string;
  modelo:string,
  color: string;
  numeroDeSerie: number;
  problemas: problemasAuto[]
}

export interface Color{
  id:number;
  colors:string;
}

