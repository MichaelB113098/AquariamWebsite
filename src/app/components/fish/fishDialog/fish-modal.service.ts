import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import {FishDialogComponent} from './fish-dialog.component'


@Injectable()

export class FishModalService {

    data: any;
    private addFinancialComponentPopupDialogRef: MatDialogRef<FishDialogComponent>;

    constructor(public dialog: MatDialog) { }

    openDialog(data) : Observable<any>{
        // open the modal dialog
        const addFinancialComponentPopupDialogRef = this.dialog.open(FishDialogComponent, {
            disableClose: false,
            hasBackdrop: true,
			backdropClass: '',
			panelClass: ['custom-dialog-details-table'],
            width: '1000px',
            maxHeight: '850px',
            position: {
                top: '10%',
                bottom: '',
                left: '',
                right: ''	
            },
            data: { isModal: true, data: data }
        });

		return addFinancialComponentPopupDialogRef.afterClosed()


    }	

    closeDialog(): void {
        if (this.addFinancialComponentPopupDialogRef) {
            this.addFinancialComponentPopupDialogRef.close(false);
        }
    }
}
