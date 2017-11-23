import { Component, OnInit } from '@angular/core';
import { TodoDataService} from '../todo-data.service';
import {Todo} from '../todo';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoDataService]
})
export class TodosComponent implements OnInit {


  todos: Todo[] = [];


  // newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute) { }

  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  public ngOnInit() {
    this.route.data
      .map((data) => data['todos'])
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo).subscribe((newTodo) => {
      this.todos = this.todos.concat(newTodo);
    });
    console.log(todo);
  }

  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo).subscribe((updatedTodo) => {
      todo = updatedTodo;
      console.log(todo);
    });
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id).subscribe((_) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

}
