import { Injectable } from '@angular/core';

import { IBiddingDetailService } from "./interfaces/IBiddingDetailService";
import { ApplicationConfiguration } from "../app.configuration";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { EventName } from './EventNameEnum';
import { Http } from '@angular/http';



@Injectable()

export class BiddingDetailService implements IBiddingDetailService {

    private connection: SignalR.Hub.Connection;
    private proxy: SignalR.Hub.Proxy;
    private readonly hubName: string = "BiddingHub";
    private biddingDataSource = new BehaviorSubject<any>(null);

    constructor(private http: Http) {
        // this.checkLocalServerConnection();
    }


    public initialiseConnection(): void {
        this.connection = $.hubConnection(ApplicationConfiguration.baseUrl);
        this.proxy = this.connection.createHubProxy(this.hubName);
        this.registerServerEvents();
        this.startConnection();
    }

    public biddingDataStream(): Observable<any[]> {
        return this.biddingDataSource.asObservable();
    }

    public PostBid(userName: string, bidValue: number): Promise<any> {
        const inputRequest = {
            userName: userName,
            bidValue: bidValue
        };
        return this.http.post(ApplicationConfiguration.baseUrl + '/bid/post', JSON.stringify(inputRequest)).toPromise();
    }

    // private checkLocalServerConnection(): void {
    //     this.http.get("http://localhost:3000/api").subscribe((response) => { console.log(response) });
    // }

    private registerServerEvents(): void {
        this.proxy.on("serverMessage", (serverMessage: string) => {
            this.biddingDataSource.next(serverMessage);
        });

        this.proxy.on("onEvent", (eventName: EventName, biddingDetail: any) => {
            console.log(`${eventName}: ${biddingDetail}`);
            this.bubbleOutServerEvent(eventName, biddingDetail);
        });

    }

    private startConnection(): void {
        this.connection.start().done((existingBidDetails: any) => {
            // console.log("Connection estabilished. Existing bid details are- ", existingBidDetails.data);
            console.log(`Connection established to hub - ${existingBidDetails.data}`);
            // this.biddingDataSource.next(Object.create(existingBidDetails.data));
        }).fail(() => {
            console.log("Connection failed");
        });
    }

    private bubbleOutServerEvent(eventName: EventName, biddingDetail: any): void {

        switch (eventName) {
            case EventName.Connected:
            case EventName.Refresh:
                this.biddingDataSource.next([...biddingDetail]);
                break;
            case EventName.BidPosted:
                let biddingDetailAsArray = [biddingDetail]
                this.biddingDataSource.next([...biddingDetailAsArray]);
                break;
            default:
                break;
        }

    }

} 