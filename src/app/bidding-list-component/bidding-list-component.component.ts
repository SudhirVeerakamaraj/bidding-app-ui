import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetailService } from './../services/user-detail-services'
import { BiddingDetailService } from "./../services/bidding-detail-service";
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NEW_BID_TRANSITION } from './../animation/new-bid-enter-animation/new-bid-enter-animation'
// import { New } from "./../animation/new-bid-enter-animation";

@Component({
  selector: 'app-bidding-list-component',
  templateUrl: './bidding-list-component.component.html',
  styleUrls: ['./bidding-list-component.component.scss'],
  animations: [NEW_BID_TRANSITION]
})
export class BiddingListComponentComponent implements OnInit {

  private userBiddingForm: FormGroup;


  protected userName: string;
  protected bidders: any[] = [];

  constructor(private userDetailService: UserDetailService
    , private router: Router
    , private biddingDetailService: BiddingDetailService) { }

  ngOnInit() {
    this.validateName()
    this.initialiseSubscription();
    this.biddingDetailService.initialiseConnection();
    this.initialiseForm();
  }

  protected onBidClick(bidValue: number) {
    this.biddingDetailService.PostBid(this.userDetailService.UserName, bidValue).then(() => {
      console.log("Bid asked");
    });
  }

  protected onBidDeleteClick(name: string) {
    this.biddingDetailService.DeleteBid(name).then(() => {
      console.log("Bid deleted");
    });
  }

  private validateName(): void {
    if (this.userDetailService.UserName) {
      this.userName = this.userDetailService.UserName;
    } else {
      this.router.navigate(['/home']);
    }
  }

  private initialiseSubscription() {
    this.biddingDetailService.biddingDataStream().
      subscribe(
      (biddersFromServer: any) => {
        if (biddersFromServer) {
          if (Array.isArray(biddersFromServer) && biddersFromServer.length > 0) {
            console.log(`Message received from server is ${biddersFromServer}`);
            this.bidders = [];
            biddersFromServer.forEach((bidderFromServer) => {
              this.bidders.push({
                uniqueId: bidderFromServer.UniqueId,
                name: bidderFromServer.Name,
                bidValue: bidderFromServer.Value,
                isNew: bidderFromServer.isNew
              });
            });
          } else {
            this.bidders.push({
              name: biddersFromServer.Name,
              bidValue: biddersFromServer.Value
            });
          }
        }
      }

      );
  }

  private initialiseForm() {
    this.userBiddingForm = new FormGroup({
      bidValue: new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(5), Validators.min(1)])
    });
  }
}
