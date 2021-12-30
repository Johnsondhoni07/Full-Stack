import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  inputData: string = '';
  // inputAge:any='' ;
  @Output() Data: EventEmitter<any> = new EventEmitter();
  
  // closeResult = '';

  clickHandler() {
    // this.Data.push({
    //   id: Date.now(),
    //   name: this.inputData,
    // });
    this.Data.emit({
      id: Date.now(),
      name: this.inputData,
    });
    // console.log(this.Data);
    this.inputData = '';
  }
  // onClickDelete(id: number) {
  //   // console.log(id);
  //   // this.Data = this.Data.filter((items: any) => items.id !== id);

  // }
  // onClickEdit(id: number) {
  //   // console.log(id);
  //   this.tempData = this.Data.filter((items: any) => items.id === id);
  //   this.editData = this.tempData.map((e: any) => e.name);
  // }
  // onClickEditSave(id: number) {
  //   this.update = this.editData;

  //   this.Data.map((e: any) => {
  //     if ((id === e.id)) {
  //       e.name = this.update;
  //     }
  //   });
  // }
  

  ngOnInit(): void {}
}
