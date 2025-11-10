import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../shared/types/todo.types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient)
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos'

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.baseUrl}`)
  }
}
