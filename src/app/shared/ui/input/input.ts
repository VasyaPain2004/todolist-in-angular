import { Component, Input } from '@angular/core';
import { Search } from "../../icons/search/search";

@Component({
  selector: 'app-input',
  imports: [Search],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input() placeholder!: string
}
