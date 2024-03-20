import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //  'Accept': application/json,
  //  ' Authorization':localStorage.getItem('token')|| "" 

  constructor() { }
  gettokenforAuth(): boolean {
    if (typeof localStorage !== 'undefined') { // Corrected comparison operator from '|' to '!=='
      return !!localStorage.getItem("token");
    }
    return false;
  }
}
