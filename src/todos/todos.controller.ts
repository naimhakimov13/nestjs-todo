import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { TodosService } from './todos.service';
import { Todo } from './schemas/todo.schemas';

@Controller('todos')
export class TodosController {

  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(@Query('limit') limit: number): Promise<Todo[]> {
    return this.todosService.getAll(limit)
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Todo> {
    return this.todosService.getById(id);
  }

  @Post()
  create(@Body() todo: TodoDto) {
    return this.todosService.create(todo)
  }

  @Delete(':id')
  removeTodo(@Param('id') id: string) {
    return this.todosService.delete(id)
  }

}
