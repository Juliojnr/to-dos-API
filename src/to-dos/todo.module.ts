import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoController } from "./controller/to-dos.controller";
import { Todos } from "./entities/to-dos.entity";
import { TodoService } from "./service/to-dos.service";

@Module({
    imports: [TypeOrmModule.forFeature([Todos])],
    providers: [TodoService],
    controllers: [TodoController],
    exports: [TypeOrmModule]
})

export class TodoModule {}