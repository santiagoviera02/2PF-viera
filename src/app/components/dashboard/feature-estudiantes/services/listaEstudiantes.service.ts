import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesService {

  ListaEstudiantes = [
    { id: 1, nombre: "Juan Cruz", apellido: "Klein", edad: 25, telefono: 115512215, correo: 'ejemplo@ejemplo' },
    { id: 2, nombre: "Miguel", apellido: "Martinez", edad: 30, telefono: 561654215, correo: 'ejemplo@ejemplo' },
    { id: 3, nombre: "Toni", apellido: "Montana", edad: 23, telefono: 156498714654, correo: 'say@hellotomy.little.friend' },
    { id: 4, nombre: "Julio", apellido: "Dolsvic", edad: 19, telefono: 6516541645, correo: 'ejemplo@ejemplo' },
    { id: 5, nombre: "Juan", apellido: "Bustos", edad: 29, telefono: 935484645454, correo: 'ejemplo@ejemplo' },
    { id: 6, nombre: "Marta", apellido: "Sanchez", edad: 35, telefono: 516546315, correo: 'ejemplo@ejemplo' },
    { id: 7, nombre: "Pedro", apellido: "Gimenez", edad: 41, telefono: 53165465, correo: 'ejemplo@ejemplo' },

  ];
  constructor() { }

  getEstudiantes() {
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number) {
    this.ListaEstudiantes.splice(index, 1);
  }

  editarEstudiante(estudiante: EstudiantesLista) {
    const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id)
    this.ListaEstudiantes[index] = estudiante;
  }

  agregarEstudiante(estudiante: EstudiantesLista) {
    this.ListaEstudiantes.unshift(estudiante);

  }

  editEstudiante(estudiante: EstudiantesLista) {
    const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id);
    this.ListaEstudiantes[index] = estudiante;


  }
}