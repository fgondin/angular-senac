import { Component } from '@angular/core';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent {

  tasks: string[] = [];

  addTask(task: string){
    this.tasks.push(task);
  }

  removeTask(index: number){
    this.tasks.splice(index, 1);
  }

  completeTask(index: number){
    
  }

}
