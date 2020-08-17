import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialogTitle, MatDialog } from '@angular/material';
import { DailyFinancial} from '../../interfaces'
import { AddFinancialModalService } from './addFinancialDialog/add-financial-modal.service'

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss']
})
export class FinancialsComponent implements OnInit {

	dailyFinancials: DailyFinancial[];
	dataSource: MatTableDataSource<DailyFinancial>;
	displayedColumns: string[] = [
		'date', 'ticketSales', 'eventSales', 'concessionSales', 'researchFunding', 'donationFunding'
	];
  constructor(private addFinancialModalService: AddFinancialModalService,
	public dialog: MatDialog,) { 
	  this.dailyFinancials = [{id : 1, ticketSales: 5, eventSales: 6, concessionSales: 7, researchFunding: 8, donationFunding: 9},
	  							{id : 2, ticketSales: 5, eventSales: 6, concessionSales: 7, researchFunding: 8, donationFunding: 9}]
	  this.dataSource = new MatTableDataSource(this.dailyFinancials)
		}
  ngOnInit() {
  }

  openDialog(){
	this.addFinancialModalService.openDialog(null).subscribe(result =>{
		if (result != undefined)
		{
			this.dailyFinancials.push(result.data)
			this.dataSource = new MatTableDataSource(this.dailyFinancials)
		}
	})
	}	
}
