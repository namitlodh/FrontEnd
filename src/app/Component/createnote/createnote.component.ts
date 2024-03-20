import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../Services/NoteService/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrl: './createnote.component.scss'
})
export class CreatenoteComponent implements OnInit{
  @Output() refreshEventCreate=new EventEmitter<string>();
  display:boolean =true;
  submitted=false;
  notesForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private notes: NoteService){}
  ngOnInit(): void {
    this.notesForm=this.formBuilder.group(
      {
        title: ['',[Validators.required]],
        takeanote: ['',[Validators.required]]
      }
    )
  }

  Notesubmit(){
    this.submitted=true;
    if(this.notesForm.valid){
      let reqData={
        title: this.notesForm.value.title,
        description: this.notesForm.value.takeanote
      }
      console.log(reqData);
      this.notes.addNotes(reqData).subscribe((res:any)=>{
        console.log(res);
        this.refreshEventCreate.emit(res)
      });
    }
    this.display=true;
  }
}

