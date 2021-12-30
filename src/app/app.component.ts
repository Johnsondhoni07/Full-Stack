import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData: any = [];
  title = 'ToDo';

  InputData(data: any) {
    this.userData.push(data);
  }
  deleteData(data1: any) {
    this.userData = data1;
  }
}
