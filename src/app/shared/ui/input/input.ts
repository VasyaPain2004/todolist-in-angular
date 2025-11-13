import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Search } from "../../icons/search/search";

@Component({
  selector: 'app-input',
  imports: [Search],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input() placeholder!: string
  @Output() searchChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }
}
