import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent {
  public newLogin!: string;
  public newPassword!: any;
  public newEmail!: any;
  public arrUser: any = [];
  public editIndex!: number;
  public editStatus = false;
  addUser(): void {
    let userObj = {
      login: this.newLogin,
      password: this.newPassword,
      email: this.newEmail,
    };

    this.arrUser.push(userObj);

    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
  }
  deleteUser(index: number): void {
    this.arrUser.splice(index, 1);
  }

  editUser(index: number): void {
    this.newLogin = this.arrUser[index].login;
    this.newPassword = this.arrUser[index].password;
    this.newEmail = this.arrUser[index].email;
    this.editIndex = index;
    this.editStatus = true;
  }
  saveEditUser(): void {
    this.arrUser[this.editIndex].login = this.newLogin;
    this.arrUser[this.editIndex].password = this.newPassword;
    this.arrUser[this.editIndex].email = this.newEmail;
    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
    this.editStatus = false;
  }
}
