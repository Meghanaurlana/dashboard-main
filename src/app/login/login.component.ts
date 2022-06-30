import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',
 
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private toastr:ToastrService) {
    this.loginForm = fb.group({});
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({


      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
       
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),

      radio: new FormControl("", [
        Validators.required])
    }


    )

  }

  getFormControll(fieldName: string) {
    return this.loginForm.controls[fieldName];

  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.loginForm.markAllAsTouched();
    // this.toastr.success("login success");
    // this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    // window.localStorage.setItem("KEY", "VALUE");
    // window.localStorage.getItem("KEY");

  }


}






