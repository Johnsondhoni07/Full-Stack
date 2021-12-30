import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  editData: string = '';
  
  tempData: any = [];
  update: string = '';
  @Input() Data: any;

  @Output() Data1 : EventEmitter<any> = new EventEmitter();

  onClickDelete(id: number) {
    
    const Data2= this.Data.filter((items: any) => items.id !== id);
    this.Data1.emit(Data2)
    // console.log(this.Data1);
  }
  onClickEdit(id: number) {
    // console.log(id);
    this.tempData = this.Data.filter((items: any) => items.id === id);
    this.editData = this.tempData.map((e: any) => e.name);
  }
  onClickEditSave(id: number) {
    this.update = this.editData;

    this.Data.map((e : any) => {
      if (id === e.id) {
        e.name = this.update;
      }
    }
    );
  }

  constructor(private modalService: NgbModal) {}
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  ngOnInit(): void {}
}
