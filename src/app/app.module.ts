import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatIconModule, MatInputModule, MatGridListModule, MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './app.routes'
import { AppComponent } from './app.component';
import { BiddingListComponentComponent } from "./bidding-list-component/bidding-list-component.component";
import { UserRegisterComponentComponent } from "./user-register-component/user-register-component.component";
import { TermsAndConditionsComponent } from "./terms-and-conditions-component/terms-and-conditions-component";
import { AmountComponent } from './amount-component/amount-component';

import { UserDetailService } from './services/user-detail-services';
import { BiddingDetailService } from './services/bidding-detail-service';


@NgModule({
  declarations: [
    AppComponent,
    BiddingListComponentComponent,
    UserRegisterComponentComponent,
    TermsAndConditionsComponent,
    AmountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [UserDetailService, BiddingDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
