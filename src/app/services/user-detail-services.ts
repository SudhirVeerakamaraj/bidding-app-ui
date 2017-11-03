import { IUserDetailsService } from './interfaces/IUserDetailService';
import { Injectable } from '@angular/core';

@Injectable()

export class UserDetailService implements IUserDetailsService {
    private userName: string;

    public set UserName(name: string) {
        this.userName = name;
    }

    public get UserName() {
        return this.userName;
    }
}