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
 
    console.log(this.profileForm.value);

  }
}
