import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../Services/NoteService/note.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrl: './archivenote.component.scss'
})
export class ArchivenoteComponent implements OnInit{
  @Output() refresharchive=new EventEmitter<string>()
  archivelist:any
  constructor(private notes: NoteService){}

  ngOnInit(): void {
    this.Notesubmit()
  }

  Notesubmit(){
    this.notes.getNotes().subscribe((res:any)=>{
      this.archivelist=res.data
      this.archivelist=this.archivelist.filter((object:any)=>{
        return object.isArchive==true && object.isTrash==false;
      })
      console.log(this.archivelist)
      this.refresharchive.emit(res)
    })
  }
}
