import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ isRequired: true })
  text: string;

  @Prop({ isRequired: true })
  title: string;

  @Prop({ isRequired: true })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);