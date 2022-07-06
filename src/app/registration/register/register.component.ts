import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { ToastModule} from 'primeng/toast';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private messageService: MessageService) {
    this.signupForm = fb.group({});
  }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl(''),

      phoneNumber: new FormControl(''),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
        // Validators.pattern('[a-z 0-9]+[a-z]+\.[a-z]{2,3}')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),

      privacypolicy: new FormControl(true, [
        Validators.required])
    }
    )}
  

  getFormControll(fieldName: string) {
    return this.signupForm.controls[fieldName];

  }

  onSubmit(): void {
    console.log(this.signupForm.value);
    this.signupForm.markAllAsTouched();
   
    
if(this.signupForm.valid){
  this.messageService.add({severity:'success', summary: 'Success', detail: 'logged in'});
}else{
  
  this.messageService.add({severity:'error', summary: 'please fill required fields', detail: 'please fill required fields'});
}


  }

  // register(){
  //   this.router.navigate(['login'],{relativeTo: this.route})
  // }

}




