import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userService/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  hide=true;
  submitted=false;
  loginForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private route:Router){}
  ngOnInit(): void {
    this.loginForm= this.formBuilder.group(
      {
        email: ['',[Validators.required,Validators.email]],
        Password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]]
      }
      )
  }

  LoginSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
    let reqData={
      email: this.loginForm.value.email,
      Password: this.loginForm.value.Password
    }

    this.userService.login(reqData).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem("token",res.data);
      this.route.navigateByUrl("keep/getnotes");
    })}
    else{console.log("Invalid Inputs")}
  }
}
