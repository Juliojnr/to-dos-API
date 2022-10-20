import { TypeOrmModule } from "@nestjs/typeorm";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'tb_todos'})
export class Todos {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    todo: string

    @IsNotEmpty()
    @Column({nullable: false})
    status: string
}

