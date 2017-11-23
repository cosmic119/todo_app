import { Injectable } from '@angular/core';
import { Todo} from './todo';
import { ApiService} from './api.service';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class TodoDataService {
  constructor(private api: ApiService) { }

  //추가 과정 시뮬
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  //삭제 과정 시뮬
  deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  //업데이트 과정 시뮬
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  //투두리스트 가져오기
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  //id로 Todo 가져오기
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  //todo 토글
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    console.log(todo.complete);

    return this.api.updateTodo(todo);
  }


}
