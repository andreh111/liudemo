import {Component, OnInit} from '@angular/core';
import {TodosService} from "../todos.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any;

  constructor(public todoService: TodosService) {
  }

  ngOnInit() {
    this.showTasks();
  }

  showTasks() {
    this.todoService.getTasks()
      .subscribe((data) => {
        this.tasks = data;
      });
  }

}
