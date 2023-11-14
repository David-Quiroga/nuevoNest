import { Controller, Get, Param, ParseIntPipe, Post, Body, Query } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';

@Controller('alumnos')
export class AlumnosController { // Cambio en el nombre de la clase
    constructor(public alumnos: AlumnosService){}
    @Get()
    trs(){
        return this.alumnos.all_items
    }
    @Get(":id")
    dos(@Param("id", ParseIntPipe) dato: string){
        return this.alumnos.alu(dato);
    }
    @Post()
    create(@Body() newItem: {id:number, nombre: string}){
        return this.alumnos.createItem(newItem)
    }
    @Get("search")
    search(@Query("nombre") nombre: string){
        return this.alumnos.searchItem(nombre)
    }
}
