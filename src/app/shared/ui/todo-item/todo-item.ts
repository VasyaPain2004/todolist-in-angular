import { Component, Input } from '@angular/core';
import { ITodo } from '../../types/todo.types';
import { Typography } from "../typography/typography";

@Component({
  selector: 'app-todo-item',
  imports: [Typography],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input() todo!: ITodo
}
