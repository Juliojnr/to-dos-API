import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm/dist/common";
import { Repository } from "typeorm";
import { Todos } from "../entities/to-dos.entity";




@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todos)
        private todosRepository: Repository<Todos>
    ) {}

    async findAll(): Promise<Todos[]> {
        return await this.todosRepository.find()
    }

    async findById(id: number): Promise<Todos> {
        let todo = await this.todosRepository.findOne({
            where: {
                id
            }
        })
        if (!todo)
            throw new HttpException('Todo não encontrado!', HttpStatus.NOT_FOUND)
        return todo;
    }

    async create(todos:Todos): Promise<Todos> {
        return await this.todosRepository.save(todos)        
    }

    async update(todos: Todos): Promise<Todos> {
        
        let searchTodo:Todos = await this.findById(todos.id)

        if (!searchTodo || !todos.id)
            throw new HttpException('Todo não encontrado!', HttpStatus.NOT_FOUND)
        return this.todosRepository.save(todos)
    }
        
}