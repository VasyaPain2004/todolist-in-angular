import { Component, inject } from '@angular/core';
import { TodoService } from '../../../services/todo-service';
import { ITodo } from '../../types/todo.types';
import { TodoItem } from "../todo-item/todo-item";
import { Typography } from "../typography/typography";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem, Typography],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  todoService = inject(TodoService)
  todos: ITodo[] = []

  constructor() {
    this.todoService.getTodos().subscribe((value) => {
      this.todos = value.splice(0, 10)
    })
  }
}
