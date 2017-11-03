import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserDetailService } from './../services/user-detail-services'

@Component({
  selector: 'app-user-register-component',
  templateUrl: './user-register-component.component.html',
  styleUrls: ['./user-register-component.component.css']
})

export class UserRegisterComponentComponent implements OnInit {

  public userRegisterForm: FormGroup;

  constructor(private userDetailService: UserDetailService, private router: Router) {
    this.initialise();
  }

  ngOnInit() {
  }

  public onRegisterClick(name: string): void {
    if (this.userRegisterForm.valid) {
      this.userDetailService.UserName = name;
      this.router.navigateByUrl('/join-bid');
    }
  }

  private initialise(): void {
    this.userRegisterForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

}
