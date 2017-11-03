import { Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { BiddingListComponentComponent } from './bidding-list-component/bidding-list-component.component';
import { UserRegisterComponentComponent } from './user-register-component/user-register-component.component'

export const appRoutes: Routes = [
    {
        path: 'join-bid', component: BiddingListComponentComponent
    },
    {
        path: 'home', component: UserRegisterComponentComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];