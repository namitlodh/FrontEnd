import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent implements OnInit{
  forgorpasswordForm!:FormGroup;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.forgorpasswordForm=this.formBuilder.group(
      {
        email: ['',[Validators.required,Validators.email]]
      }
    )
  }
}
