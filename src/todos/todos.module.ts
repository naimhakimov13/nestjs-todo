import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodoSchema } from './schemas/todo.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'todos', schema: TodoSchema
    }])
  ],
  controllers: [TodosController],
  providers: [TodosService]
})
export class TodosModule {}
