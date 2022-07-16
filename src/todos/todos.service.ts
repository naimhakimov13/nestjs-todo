import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TodoDto } from './dto/todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schemas';

@Injectable()
export class TodosService {
  constructor(@InjectModel('todos') private TodoModel: Model<TodoDocument>) {}

  async getAll(limit: number): Promise<Todo[]> {
    return this.TodoModel.find().limit(limit);
  }

  async getById(id: string): Promise<Todo> {
    return this.TodoModel.findById(id);
  }

  async delete(id: string): Promise<Todo> {
    return this.TodoModel.findByIdAndDelete(id);
  }

  async create(todo: TodoDto): Promise<Todo> {
    todo.completed = false;
    const newTodo = new this.TodoModel(todo);
    return newTodo.save();
  }
}
