import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Put } from "@nestjs/common/decorators";
import { Todos } from "../entities/to-dos.entity";
import { TodoService } from "../service/to-dos.service";




@Controller('/todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Todos[]> {
        return this.todoService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id: number): Promise<Todos> {
        return this.todoService.findById(id)
    }
    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body()todos: Todos): Promise<Todos> {
        return this.todoService.create(todos);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()todo: Todos): Promise<Todos> {
        return this.todoService.update(todo)
    }


}