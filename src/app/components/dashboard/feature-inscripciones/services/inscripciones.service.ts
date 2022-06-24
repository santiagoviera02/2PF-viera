import { Inscripciones } from './../../../../shared/interfaces/inscripciones';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripciones = [
    { id: 1, nombre: "Juan Pedro", apellido: "Martinez", curso: 'Angular', dias: "Lunes y Miercoles" },
    { id: 2, nombre: "Juan Carlos", apellido: "Martinez", curso: 'Angular', dias: " Martes y Jueves" },
    { id: 3, nombre: "Pedro", apellido: "Baldugas", curso: 'Vue', dias: "Lunes y Miercoles" },
    { id: 4, nombre: "Julio", apellido: "Rodriguez", curso: 'Angular', dias: "Martes y Jueves" },
    { id: 5, nombre: "Juana", apellido: "Bustos", curso: 'React', dias: "Lunes y Miercoles" },
    { id: 6, nombre: "Mayra", apellido: "Spett", curso: 'Angular', dias: "Lunes y Miercoles" },
    { id: 7, nombre: "Neron", apellido: "Gimenez", curso: 'React', dias: "Lunes y Miercoles" },

  ];
  constructor() { }

  getInscripciones() {
    return this.inscripciones.slice();
  }

  eliminarInscripciones(index: number) {
    this.inscripciones.splice(index, 1);
  }

  editarInscripciones(inscripcion: Inscripciones) {
    const index = this.inscripciones.findIndex(c => c.id === inscripcion.id)
    this.inscripciones[index] = inscripcion;
  }

  agregarInscripciones(inscripcion: Inscripciones) {
    this.inscripciones.unshift(inscripcion);

  }


}