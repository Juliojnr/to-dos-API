import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Todos } from './to-dos/entities/to-dos.entity';
import { TodoModule } from './to-dos/todo.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_to_dos',
      entities: [Todos],
      synchronize: true
    }),
    TodoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
