import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialogTitle, MatDialog } from '@angular/material';
import { DailyFinancial} from '../../interfaces'
import { AddFinancialModalService } from './addFinancialDialog/add-financial-modal.service'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss']
})
export class FinancialsComponent implements OnInit {
	@ViewChild(MatSort, {static: false}) sort: MatSort;
	dailyFinancials: DailyFinancial[];
	dataSource: MatTableDataSource<DailyFinancial>;
	displayedColumns: string[] = [
		'date', 'ticketSales', 'eventSales', 'concessionSales', 'researchFunding', 'donationFunding'
	];
  constructor(private addFinancialModalService: AddFinancialModalService, private dataService: DataService,
	public dialog: MatDialog,) { 
		}
  ngOnInit() {
	  this.getFinancials()
  }

  openDialog(){
	this.addFinancialModalService.openDialog(null).subscribe(result=>{
		if (result != undefined)
		{
			this.saveFinancial(result)
		}
	})
	}	

	getFinancials(){
		this.dataService.getAllFinancialsEndpoint().subscribe(result => {
			this.dailyFinancials = []
			result.forEach(element => {
				this.dailyFinancials.push(element.data)
			});
			this.dataSource = new MatTableDataSource(this.dailyFinancials)
			this.dataSource.sort = this.sort;
		})
	}

	saveFinancial(data : DailyFinancial){
		this.dataService.addNewFinancialEndpoint(data).subscribe(result =>{
			console.log(result)
			this.getFinancials()
		})
	}
}
