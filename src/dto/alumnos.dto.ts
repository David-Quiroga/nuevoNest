import { IsNumber, IsString } from "class-validator"

export class alumnos{
    
    @IsNumber() //! Son validadores
    readonly id: number;
    @IsString()
    readonly nombre: string;
    @IsString()
    readonly materia: string;
}