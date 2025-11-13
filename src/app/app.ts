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
  todoService = inject(TodoService)
  todos = signal<ITodo[]>([])
  currentFilter = signal<selectType>('all');
  searchQuery = signal<string>('');

  constructor() {
    this.todoService.getTodos().subscribe((value) => {
      this.todos.set(value.splice(0, 10))
    })
  }

  filteredTodos = computed(() => {
    const allTodos = this.todos();
    const filter = this.currentFilter();
    const query = this.searchQuery().toLowerCase().trim(); 
    
    let filtered = allTodos;

    switch (filter) {
      case 'complete':
        filtered = filtered.filter(todo => todo.completed);
        break;
      case 'incomplete':
        filtered = filtered.filter(todo => !todo.completed);
        break;
      case 'all':
      default:
        break;
    }

    if (query) {
      filtered = filtered.filter(todo => 
        todo.title.toLowerCase().includes(query) || 
        (todo.title && todo.title.toLowerCase().includes(query))
      );
    }

    return filtered;
  });

  onFilterChange(filter: selectType): void {
    this.currentFilter.set(filter);
  }

  onSearchChange(query: string): void {
    this.searchQuery.set(query);
  }

  onTodoUpdated(updatedTodo: ITodo): void {
    this.todos.update(todos => 
      todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    );
  }

  onTodoDeleted(todoId: number): void {
    this.todos.update(todos => 
      todos.filter(todo => todo.id !== todoId) 
    );
  }
}
