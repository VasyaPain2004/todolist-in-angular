import { Component, computed, inject, signal } from '@angular/core';
import { Typography } from "./shared/ui/typography/typography";
import { InputComponent } from "./shared/ui/input/input";
import { Select } from "./shared/ui/select/select";
import { ThemeSwitch } from "./shared/ui/theme-switch/theme-switch";
import { TodoList } from "./shared/ui/todo-list/todo-list";
import { AddComponent } from "./add-component/add-component";
import { TodoService } from './services/todo-service';
import { ITodo } from './shared/types/todo.types';
import { selectType } from './shared/types/select.types';

@Component({
  selector: 'app-root',
  imports: [Typography, InputComponent, Select, ThemeSwitch, TodoList, AddComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todolist');
  todoService = inject(TodoService)
  todos = signal<ITodo[]>([])
  currentFilter = signal<selectType>('all');

  constructor() {
    this.todoService.getTodos().subscribe((value) => {
      this.todos.set(value.splice(0, 10))
    })
  }

  filteredTodos = computed(() => {
    const allTodos = this.todos();
    const filter = this.currentFilter();
    
    switch (filter) {
      case 'complete':
        return allTodos.filter(todo => todo.completed);
      case 'incomplete':
        return allTodos.filter(todo => !todo.completed);
      case 'all':
      default:
        return allTodos;
    }
  });

  onFilterChange(filter: selectType): void {
    this.currentFilter.set(filter);
  }

  onTodoUpdated(updatedTodo: ITodo): void {
    this.todos.update(todos => 
      todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    );
  }
}
