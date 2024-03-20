import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/userService/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent implements OnInit{
  resetpasswordForm!:FormGroup;
  submitted=false;
  token:any;

  constructor(private formbuilder: FormBuilder, private userService: UserService, private activeRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.resetpasswordForm=this.formbuilder.group(
      {
        Password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
        ConfirmPassword: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]]
      }
    )
    this.token=this.activeRoute.snapshot.paramMap.get('token');
    //console.log(this.token);
  }

  ResetpasswordSubmit(){
    this.submitted=true;
    if(this.resetpasswordForm.valid){
      let reqData = {
        Password: this.resetpasswordForm.value.Password,
        ConfirmPassword: this.resetpasswordForm.value.ConfirmPassword
      }
      this.userService.resetpassword(reqData,this.token).subscribe((res:any)=>{
        console.log(res);
      });
    }
  }
}
