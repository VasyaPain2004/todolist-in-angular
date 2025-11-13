import { Component, input, output } from '@angular/core';
import { ITodo } from '../../types/todo.types';
import { Typography } from '../typography/typography';

@Component({
  selector: 'app-todo-item',
  imports: [Typography],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<ITodo>();
  todoUpdated = output<ITodo>();
  todoDeleted = output<number>();

  onToggleCompleted(): void {
    const updatedTodo: ITodo = {
      ...this.todo(),
      completed: !this.todo().completed,
    };

    this.todoUpdated.emit(updatedTodo);
  }

  onDeleteTodo(): void {
    this.todoDeleted.emit(this.todo().id); 
  }
}
