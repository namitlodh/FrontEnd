import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from '../../Services/NoteService/note.service';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrl: './noteicons.component.scss'
})
export class NoteiconsComponent implements OnInit{
  @Input() notesObject:any
  @Output() eventchange=new EventEmitter<string>()
  constructor(private notes:NoteService){}
  ngOnInit(): void {
    
  }
  onDelete(){
    let reqData={
      notesId:this.notesObject.notesId,
    }
    console.log(reqData)
    this.notes.trashnotes(reqData).subscribe((res:any)=>{
      console.log("Note Trashed Successfully",res)
      this.eventchange.emit(res)
    })
  }

  onArchiev(){
    let reqData={
      notesId: this.notesObject.notesId
    }
    console.log(reqData)
    this.notes.archiveNotes(reqData).subscribe((response:any)=>{
      console.log(response)
      this.eventchange.emit(response)
    })
  }
  colorArray:Array<any>=[
    {code:'#FF6347',name:'Tomato'},
    {code:'#FF4500',name:'OrangeRed'},
    {code:'#FFFF00',name:'yellow'},
    {code:'#7FFFD4',name:'Aquamarine'},
    {code:'#ffffff',name:'white'},
    {code:'#D3D3D3',name:'grey'}
  ];
  selectcolor(colors:any){
    let reqData={
      color:colors.name,
      notesId:this.notesObject.notesId
    }
    this.notes.notescolor(reqData).subscribe((response:any)=>{
      console.log(response)
      this.eventchange.emit(response)
    })
  }

  refresharchivenotes($event:any){
    console.log("Archive noted"+$event);
    this.onArchiev()
  }
}
