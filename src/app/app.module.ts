import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatLabel, MatInputModule, MatSelectModule, MatSortModule } from '@angular/material';

import { MatTabsModule } from '@angular/material/tabs'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FinancialsComponent } from './components/financials/financials.component';
import { FishComponent } from './components/fish/fish.component';
import { AppRoutingModule } from './app-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTableModule } from '@angular/material';
import { AddFinancialModalService } from './components/financials/addFinancialDialog/add-financial-modal.service';
import { AddFinancialDialogComponent } from './components/financials/addFinancialDialog/add-financial-dialog.component';
import { DataService } from './services/data.service';
import { FishDialogComponent } from './components/fish/fishDialog/fish-dialog.component';
import { FishModalService } from './components/fish/fishDialog/fish-modal.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    FinancialsComponent,
	  FishComponent,
    AddFinancialDialogComponent,
    FishDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
	FormsModule,
	MatTabsModule,
	MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
	FormsModule,
	ReactiveFormsModule,
	AppRoutingModule,
    RouterModule.forRoot([
    ]),
    BrowserAnimationsModule,
	AppRoutingModule,
	NgApexchartsModule,
	MatDialogModule
  ],
  providers: [AddFinancialModalService,FishModalService, DataService,
	{ provide: MAT_DIALOG_DATA, useValue: {} },
	{ provide: MatDialogRef, useValue: {} },],
  bootstrap: [AppComponent],
  entryComponents: [AddFinancialDialogComponent, FishDialogComponent]
})
export class AppModule { }
