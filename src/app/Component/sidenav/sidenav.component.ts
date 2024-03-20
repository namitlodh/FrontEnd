import { Component, Output,EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import { NoteService } from '../../Services/NoteService/note.service';

interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}
// interface noteObj{
//   "title":string,
//   "description":string,
//   "isArchive":boolean,
//   "isTrash":boolean
// }
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> =new EventEmitter();
  collapsed=false;
  screenwidth=0;
  navData = navbarData;
  // noteDetails: noteObj[]=[];


  // constructor(public noteService:NoteService){}

  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenwidth:this.screenwidth});
  }
  // archivedNotes()
  // {
  //   this.noteService.getNotes().subscribe((result:any)=>{
  //     this.noteDetails=result.data;
  //   },
  //   (error)=>{console.log(error);});
  //   this.noteDetails=this.noteDetails.filter((object:any)=>{
  //     return object.isArchive==true && object.isTrash==false;
  //   } );
  // }
  // closeSidenav():void{
  //   this.collapsed=false;
  //   this.onToggleSideNav.emit({collapsed:this.collapsed,screenwidth:this.screenwidth});
  // }
}