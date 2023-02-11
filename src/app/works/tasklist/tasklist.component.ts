import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent {
  public newTask!: string;
  public status: boolean = false;
  public arrTask: any = [];
  public count = 0;

  addTask(): void {
    let taskObj = {
      task: this.newTask,
      statusTask: this.status,
    };
    this.arrTask.push(taskObj);
    this.newTask = '';
    ++this.count;
    console.log(this.arrTask);
  }

  remove(index: number): void {
    this.arrTask.splice(index, 1);
    --this.count;
  }
}
