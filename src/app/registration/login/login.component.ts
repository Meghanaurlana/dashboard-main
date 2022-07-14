import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

 

  constructor(private fb: FormBuilder, private messageService: MessageService , private router: Router) {
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

      remeberme: new FormControl(false, [
        Validators.required])
    }
    )
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    
    if (this.loginForm.valid) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      this.router.navigateByUrl('/dashboard');
      console.log(this.loginForm.value);
    } else {

      this.messageService.add({ severity: 'error', summary: 'please fill required fields', detail: 'please fill required fields' });
    }
  }
 
}







