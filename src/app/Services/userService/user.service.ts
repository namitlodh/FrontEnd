import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpService: HttpService) { }
  register(reqData: any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('https://localhost:44318/api/User/Reg',reqData,false,header)
  }

  login(reqData: any){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('https://localhost:44318/api/User/Log',reqData,false,header)
  }

  forgotpassword(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('https://localhost:44318/api/User/ForgotPassword?Email='+reqData.email,reqData,false,header)
  }

  resetpassword(reqData:any, token: any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44318/api/User/ResetPassword',reqData,true,header)
  }
}
