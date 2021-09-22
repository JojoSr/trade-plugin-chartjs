

export interface TradeRequest{
    requestId:string;
    created:Date;
    expires:Date;
    currencyId:number;
    currencyName:string;
    initialLevel:number;
    action:number;
    amount:number;
    rate:number;
    accountId:number;
    userId:string;
    tradeHash:string;    
}
