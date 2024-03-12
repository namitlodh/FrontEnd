import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService){}
  ngOnInit(): void {
    this.loginForm= this.formBuilder.group(
      {
        email: ['',[Validators.required,Validators.email]],
        Password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]]
      }
      )
  }

  LoginSubmit(){
    let reqData={
      email: this.loginForm.value.email,
      Password: this.loginForm.value.Password
    }

    this.userService.login(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
