import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.registerForm = fb.group({});
  }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl(''),

      phoneNumber: new FormControl(''),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),

      privacypolicy: new FormControl(false, [
        Validators.required])
    }
    )
  }



  onSubmit(): void {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid || this.registerForm.controls['password'].value != this.registerForm.controls['confirmPassword'].value) {
      return this.messageService.add({ severity: 'error', summary: 'please fill required fields', detail: 'please fill required fields' });
    } else if (!this.registerForm.controls['privacypolicy'].value) {
      return this.messageService.add({ severity: 'error', summary: 'please agree to terms and conditions', detail: 'please agree to terms and conditions' });
    } console.log(this.registerForm.value);
    return this.messageService.add({ severity: 'success', summary: 'Success', detail: 'registeredy' });

  }
}




