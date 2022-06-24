import { Cursos } from '../../../../shared/interfaces/cursos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  ListaCursos: Cursos[] = [
    { id: 1, cursoNombre: "React.Js", cursoDias: "Lunes y Miercoles", precio: 15000, profesor: "Martin Ruades", detalle: "Curso de react" },
    { id: 2, cursoNombre: "Angular", cursoDias: "Martes y Jueves", precio: 60000, profesor: "Martin Gallego", detalle: "Curso de angular" },
    { id: 3, cursoNombre: "Vue.Js", cursoDias: "Viernes", precio: 25000, profesor: "Roberto Vlad", detalle: "Curso de Vue" },
  ];
  constructor() { }

  getCursos() {
    return this.ListaCursos.slice();
  }

  eliminarCursos(index: number) {
    this.ListaCursos.splice(index, 1);
  }

  editarCursos(curso: Cursos) {
    const index = this.ListaCursos.findIndex(c => c.id === curso.id)
    this.ListaCursos[index] = curso;
  }

  agregarCursos(curso: Cursos) {
    this.ListaCursos.unshift(curso);

  }

}
