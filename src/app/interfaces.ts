export interface DailyFinancial{
	id : number;
	ticketSales : number;
	eventSales : number;
	concessionSales : number;
	researchFunding : number;
	donationFunding : number;

}

export interface FishEntry{
	fishName : string;
	quantity : number;
	location : string;
}