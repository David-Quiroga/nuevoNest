import { Controller, Get } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';

@Controller('alumnos')
export class AlumnosController { 
    constructor(public alumnosService: AlumnosService){}
    
    @Get()
    all_users(){
        return this.alumnosService.all_users()
    }

    // @Get(":id")
    // dos(@Param("id", ParseIntPipe) dato: string){
    //     return this.alumnosService
    // }
    // @Post()
    // create(@Body() newItem: {id:number, nombre: string}){
    //     return this.alumnos.createItem(newItem)
    // }
    // @Get("search")
    // search(@Query("nombre") nombre: string){
    //     return this.alumnos.searchItem(nombre)
    // }
}
