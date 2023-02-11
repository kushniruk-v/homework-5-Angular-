import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  public isOpen = false;
  public editTask!: string;
  public editIndex!: number;

  @Input() allTask: any = [];

  @Output() removeTask = new EventEmitter<number>();

  deleteTask(index: number): void {
    this.removeTask.emit(this.allTask);
  }

  showEdit(index: number): void {
    this.isOpen = true;
    this.editTask = this.allTask[index].task;
    this.editIndex = index;
  }

  saveTask(): void {
    this.allTask[this.editIndex].task = this.editTask;
    this.isOpen = false;
  }
}
