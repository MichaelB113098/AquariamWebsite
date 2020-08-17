import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(public dialog: MatDialog){
		
	}
	navLinks = [
		{ path: 'dashboard', label: 'Dashboard' },
		{ path: 'financials', label: 'Financials' },
		{ path: 'fish', label: 'Fish' },
		{ path: 'about', label: 'About' },
	  ];
	
}
