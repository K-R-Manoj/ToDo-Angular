import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrashService } from '../../services/trash/trash.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Input() Tnote:any;
  @Output() public delete_Retrive:EventEmitter<boolean> = new EventEmitter();

  constructor(private trashServices:TrashService) { }

  ngOnInit(): void {}

  public onDelete()
  {
    this.trashServices.deleteTrash(this.Tnote._id).subscribe((res)=>{
      this.delete_Retrive.emit(true);
    })
  }

  public onRetrive()
  {
    this.trashServices.retriveNote(this.Tnote).subscribe((res)=>{
      this.delete_Retrive.emit(true);
    })
  }
}
