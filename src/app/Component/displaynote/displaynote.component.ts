import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrl: './displaynote.component.scss'
})
export class DisplaynoteComponent{
  @Output() refreshUpdateNotes=new EventEmitter<string>();
  constructor(public dialog:MatDialog){}
  message:any
  @Input() notesList:any;

  

  editNoteDialogBox(notes:any){
    const dialogbox = this.dialog.open(UpdatenoteComponent,{
      width:'40%',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe(result =>{
      console.log(result);
      this.refreshUpdateNotes.emit(result)
    })
  }
  
  eventupdatenote($event:any){
    console.log("Icon to display"+$event);
    this.message=$event
    this.refreshUpdateNotes.emit(this.message)
  }
}
