import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtuhService } from '../../services/auth/atuh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private authService: AtuhService,
    private router: Router) { }
  isSpinning: boolean = false;

  loginFrom!: FormGroup;

  ngOnInit(): void {
    this.loginFrom = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  authenticate() {
    console.log(this.loginFrom.value);

  }
}
