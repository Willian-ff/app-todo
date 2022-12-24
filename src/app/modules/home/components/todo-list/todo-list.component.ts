import { Component, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
   
  ];

  public setEmitTaskList(event: string){
      this.taskList.push({task: event, checked: false})
  }
  
  constructor() {

  }

  ngOnInit(): void {
    
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm('Você quer excluir as tasks?');
    if(confirm){
      this.taskList = [];
    }
  }
}
