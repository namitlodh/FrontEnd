import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from '../../Services/NoteService/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrl: './updatenote.component.scss'
})
export class UpdatenoteComponent implements OnInit{
  title:any;
  description:any;
  id:any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogbox: MatDialogRef<UpdatenoteComponent>,
    private notes:NoteService) {
      this.title=data.title,   
      this.description=data.description,
      this.id=data.notesId
    }
  ngOnInit(): void {
  }

  closeDialog(){
    let reqData={
      title:this.title,
      description:this.description
    }
    this.notes.updateNotes(reqData,this.id).subscribe((res:any)=>{
      console.log(res);
      this.dialogbox.close()
    })
  }

}
