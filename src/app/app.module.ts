import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './app.routes'
import { AppComponent } from './app.component';
import { BiddingListComponentComponent } from "./bidding-list-component/bidding-list-component.component";
import { UserRegisterComponentComponent } from "./user-register-component/user-register-component.component";
import { UserDetailService } from './services/user-detail-services';
import { BiddingDetailService } from './services/bidding-detail-service';

@NgModule({
  declarations: [
    AppComponent,
    BiddingListComponentComponent,
    UserRegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [UserDetailService, BiddingDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
