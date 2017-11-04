/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'


import { BiddingListComponentComponent } from './bidding-list-component.component';

describe('BiddingListComponentComponent', () => {
  let component: BiddingListComponentComponent;
  let fixture: ComponentFixture<BiddingListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, MatInputModule,
        MatGridListModule,
        MatButtonModule,
        MatCardModule, FlexLayoutModule],
      declarations: [BiddingListComponentComponent]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
