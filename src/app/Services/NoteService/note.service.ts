import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token')}

  addNotes(reqData:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44318/api/Notes/Add',reqData,true,header);
  }

  getNotes(){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44318/api/Notes/GetNote',true,header);
  }

  updateNotes(reqData:any, notesId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44318/api/Notes/Update?Notesid='+notesId,reqData,true,header)
  }

  archiveNotes(reqData:any){
    let header ={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }

    return this.httpService.putService('https://localhost:44318/api/Notes/Archive?NotesId='+reqData.notesId,{},true,header)
  }

  notescolor(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44318/api/Notes/Colour?NotesId='+reqData.notesId+ "&colour="+reqData.color,{},true,header);
  }

  trashnotes(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44318/api/Notes/Trash?NotesId='+reqData.notesId,{},true,header)
  }
}
