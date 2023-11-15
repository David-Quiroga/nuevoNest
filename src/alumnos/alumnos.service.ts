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

    // find_user_by_id(@Param('id')id : number){
    //    let dato = this.usuario.find(objeto => objeto.id === id)
    //    if(!dato)
    //    throw new NotFoundException("No existe");
    // return dato;
    // }


    // find_user_by_id(id) {
    //     let res
      
    //     if(!isNaN(id)){
    //         const a =  parseInt(id)
    //         res = this.usuario.find(objeto => objeto.id === a);
    //     }
    //     else if (typeof id === "string") {
    //         res = this.usuario.find(objeto => objeto.nombre === id);


           

    //     }
    //     if(!res){
    //         throw new NotFoundException("No existe")
    //     }

    //     return res


    // }
    }
}