import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/NoteService/note.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrl: './trashnote.component.scss'
})
export class TrashnoteComponent implements OnInit{
  trashlist:any
  constructor(private notes: NoteService){}

  ngOnInit(): void {
    this.Notesubmit()
  }

  Notesubmit(){
    this.notes.getNotes().subscribe((res:any)=>{
      this.trashlist=res.data
      this.trashlist=this.trashlist.filter((object:any)=>{
        return object.isArchive==false && object.isTrash==true;
      })
      console.log(this.trashlist)
    })
  }
}
