import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.profileForm = fb.group({});
  }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
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
      pincode: new FormControl(''),
    }
    )
  }

  onsubmit(): void {
 
     this.profileForm.markAllAsTouched();
     if(this.profileForm.valid){
       console.log(this.profileForm.value);
       
     }

    //  if (this.profileForm.invalid || this.profileForm.controls['password'].value != this.profileForm.controls['confirmPassword'].value) {
    //   //  return this.messageService.add({ severity: 'error', summary: 'please fill required fields', detail: 'please fill required fields' });
    //  } else if (!this.profileForm.controls['privacypolicy'].value) {
    //   //  return this.messageService.add({ severity: 'error', summary: 'please agree to terms and conditions', detail: 'please agree to terms and conditions' });
    //  } console.log(this.profileForm.value);
    // //  return this.messageService.add({ severity: 'success', summary: 'Success', detail: 'registered' });

  }
}
