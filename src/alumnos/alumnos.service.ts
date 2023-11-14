import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AlumnosService {
    alumnos = [
        { id: 1, nombre: "Pedro" },
        { id: 2, nombre: "Juan" },
        { id: 3, nombre: "Mateo" }
    ];

    alu(id) {
        const res = this.alumnos.find(objeto => objeto.id === parseInt(id));
        if (!res) {
            throw new NotFoundException("No existe");
        } else {
            return res;
        }
    }
    all_items() {
        return this.alumnos;
    }
    createItem(newAlumno: { id: number, nombre: string }) {
        this.alumnos.push(newAlumno);
        return newAlumno;
    }
    searchItem(nombre: string) {
        return this.alumnos.filter(objeto => objeto.nombre.includes(nombre))
    }
}