import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  @Input() fill: string = '#6C63FF'
  @Input() size: string = '21'
}
