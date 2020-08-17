import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import {AddFinancialDialogComponent} from './add-financial-dialog.component'


@Injectable()

export class AddFinancialModalService {

    data: any;
    private addFinancialComponentPopupDialogRef: MatDialogRef<AddFinancialDialogComponent>;

    constructor(public dialog: MatDialog) { }

    openDialog(data) : Observable<any>{
        // open the modal dialog
        const addFinancialComponentPopupDialogRef = this.dialog.open(AddFinancialDialogComponent, {
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
            data: { isModal: true, data: this.data }
        });

		return addFinancialComponentPopupDialogRef.afterClosed()


    }	

    closeDialog(): void {
        if (this.addFinancialComponentPopupDialogRef) {
            this.addFinancialComponentPopupDialogRef.close(false);
        }
    }
}
