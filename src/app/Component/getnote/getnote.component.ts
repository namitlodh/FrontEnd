import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/NoteService/note.service';


@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrl: './getnote.component.scss'
})
export class GetnoteComponent implements OnInit{
  notesArray:any;
  constructor(private notes: NoteService){}

  ngOnInit(): void {
    this.Notesubmit()
  }

  Notesubmit(){
    this.notes.getNotes().subscribe((response: any)=>{
      console.log(response);
      this.notesArray=response.data;
      this.notesArray = this.notesArray.filter((object:any)=>{
        return object.isTrash==false;
      })
      this.notesArray = this.notesArray.filter((object:any)=>{
        return object.isArchive==false;
      })
      this.notesArray.reverse()
    })
  }

  receiverRefreshEventCreate($event:any){
    console.log("Create to GetAllNotes"+$event);
    this.Notesubmit()
  }

  displayNotes($event:any){
    console.log("Update to GetAllNotes"+$event);
    this.Notesubmit()
  }
}
