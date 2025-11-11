import { Component, input, output } from '@angular/core';
import { TodoItem } from "../todo-item/todo-item";
import { Typography } from "../typography/typography";
import { ITodo } from '../../types/todo.types';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem, Typography],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  todos = input.required<ITodo[]>()
  todoUpdated = output<ITodo>();

  onTodoChange(updatedTodo: ITodo): void {
    this.todoUpdated.emit(updatedTodo);
  }
}
