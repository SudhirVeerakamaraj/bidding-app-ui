export interface IBiddingDetailService {
    initialiseConnection(): void;
    PostBid(userName: string, bidValue: number): Promise<any>;
}