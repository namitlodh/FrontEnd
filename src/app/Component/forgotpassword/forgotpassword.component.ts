import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent implements OnInit{
  forgorpasswordForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService){}
  
  ngOnInit(): void {
    this.forgorpasswordForm=this.formBuilder.group(
      {
        email: ['',[Validators.required,Validators.email]]
      }
    )
  }

  ForgetSubmit(){
    let reqData={
      email: this.forgorpasswordForm.value.email
    }
    //console.log(reqData);
    this.userService.forgotpassword(reqData).subscribe((res:any)=>{
      console.log(res);
    }
    )
  }
}
