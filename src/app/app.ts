import { Component, signal } from '@angular/core';
import { Typography } from "./shared/ui/typography/typography";
import { InputComponent } from "./shared/ui/input/input";
import { Select } from "./shared/ui/select/select";
import { ThemeSwitch } from "./shared/ui/theme-switch/theme-switch";
import { TodoList } from "./shared/ui/todo-list/todo-list";
import { AddComponent } from "./add-component/add-component";

@Component({
  selector: 'app-root',
  imports: [Typography, InputComponent, Select, ThemeSwitch, TodoList, AddComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todolist');
}
