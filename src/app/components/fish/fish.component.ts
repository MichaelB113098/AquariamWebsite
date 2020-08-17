import { Component, OnInit, ViewChild } from '@angular/core';
import { FishEntry } from 'src/app/interfaces';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { FishModalService } from './fishDialog/fish-modal.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {
	@ViewChild(MatSort, {static: false}) sort: MatSort;
	
	fish: FishEntry[];
	dataSource: MatTableDataSource<FishEntry>;
	displayedColumns: string[] = [
		'name', 'quantity', 'location'
	];
  constructor(private fishModalService: FishModalService, private dataService: DataService,
	public dialog: MatDialog,) { 
		}
  ngOnInit() {
	  this.getFish()
  }

  openDialog(){
	this.fishModalService.openDialog(null).subscribe(result=>{
		if (result != undefined)
		{
			this.saveFish(result)
		}
	})
	}	

	getFish(){
		this.dataService.getAllFishEndpoint().subscribe(result => {
			this.fish = []
			result.forEach(element => {
				this.fish.push(element.data)
			});
			this.dataSource = new MatTableDataSource(this.fish)
			this.dataSource.sort = this.sort
		})
	}

	saveFish(data : FishEntry){
		this.dataService.addNewFishEndpoint(data).subscribe(result =>{
			this.getFish()
			console.log(result)
		})
	}
}
