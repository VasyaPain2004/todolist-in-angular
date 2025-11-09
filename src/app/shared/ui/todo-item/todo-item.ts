import { Component, Input } from '@angular/core';
import { ITodo } from '../../types/todo.types';
import { Typography } from "../typography/typography";
import { Edit } from "../../icons/edit/edit";
import { Trash } from "../../icons/trash/trash";

@Component({
  selector: 'app-todo-item',
  imports: [Typography, Edit, Trash],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input() todo!: ITodo
}
