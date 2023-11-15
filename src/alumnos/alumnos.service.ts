import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { student } from './alumno.interface';
import { v4 as uuid } from 'uuid';


@Injectable()
export class AlumnosService {

     alumnos:student []= [
        { id: 1, nombre: "Pedro" },
        { id: 2, nombre: "Juan" },
        { id: 3, nombre: "Mateo" }
    ]


    all_users() {
        return this.alumnos

    }
}