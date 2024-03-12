import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;
  constructor(private _formBuilder: FormBuilder, private userService: UserService){}
  ngOnInit(): void {
    this.registerForm=this._formBuilder.group(
      {
        firstname: ['',[Validators.required,Validators.pattern('[A-Z][a-z]{2,}')]],
        lastname: ['',[Validators.required,Validators.pattern('[A-Z][a-z]{2,9}')]],
        email: ['',[Validators.required,Validators.email]],
        Password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
        ConfirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]]
      }
    )
  }
  
  RegisterSubmit(){
    let reqData={
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      Password: this.registerForm.value.Password
    }

    this.userService.register(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
