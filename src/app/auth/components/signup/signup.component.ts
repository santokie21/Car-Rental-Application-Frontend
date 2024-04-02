import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AtuhService } from '../../services/auth/atuh.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private authService: AtuhService,
    private messageService: NzMessageService,
    private router: Router) { }

  isSpinning: boolean = false;
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidate]]
    });
  }

  confirmationValidate = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.signUpForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  register() {
    this.authService.register(this.signUpForm.value).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.messageService.success('User registered successfully', { nzDuration: 4000 });
        this.router.navigateByUrl("/login");
      }
      else {
        this.messageService.error('User registration failed', { nzDuration: 4000 });
      }
    })
    console.log(this.signUpForm.value);
  }
}
