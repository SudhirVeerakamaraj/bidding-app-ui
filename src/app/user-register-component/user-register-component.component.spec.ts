/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router'

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { UserDetailService } from '../services/user-detail-services';

import { TermsAndConditionsComponent } from "../terms-and-conditions-component/terms-and-conditions-component";
import { UserRegisterComponentComponent } from './user-register-component.component';

class RouterStub {
  navigateByUrl(url: string) {
    return true;
  }
}

fdescribe('UserRegisterComponentComponent', () => {
  let component: UserRegisterComponentComponent;
  let fixture: ComponentFixture<UserRegisterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegisterComponentComponent, TermsAndConditionsComponent],
      providers: [
        UserDetailService,
        { provide: Router, useClass: RouterStub }
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule, FormsModule, MatInputModule,
        MatGridListModule,
        MatButtonModule,
        MatCardModule, FlexLayoutModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set userDetailService.userName to TEST USER and call router.navigate()',
    inject([Router], (router: Router) => {

      const nameControl = component.userRegisterForm.controls['name'];
      nameControl.setValue('TEST USER');
      spyOn(router, 'navigateByUrl').and.callFake((url) => {
        expect(url).toBe('/join-bid');
      });
      component.onRegisterClick('TEST USER');
      expect(router.navigateByUrl).toHaveBeenCalled();
    }));
});
