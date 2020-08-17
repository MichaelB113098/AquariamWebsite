import { Component, OnInit , Inject, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormBuilder, FormGroup,AbstractControl } from '@angular/forms';
import { DailyFinancial } from "../../../interfaces"

@Component({
  selector: 'app-add-financial-dialog',
  templateUrl: './add-financial-dialog.component.html',
  styleUrls: ['./add-financial-dialog.component.css']
})
export class AddFinancialDialogComponent implements OnInit {

	form : FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  	public dialogRef: MatDialogRef<AddFinancialDialogComponent>,
  	private fb: FormBuilder) 
  {
	this.form = fb.group(
		{ticketInput : ["", [Validators.required, Validators.min(0), Validators.max(999999), CustomValidator.numeric]],
		 eventInput : ["", [Validators.required, Validators.min(0), Validators.max(999999), CustomValidator.numeric]],
		 concessionsInput : ["", [Validators.required, Validators.min(0), Validators.max(999999), CustomValidator.numeric]],
		 researchInput : ["", [Validators.required, Validators.min(0), Validators.max(999999), CustomValidator.numeric]],
		 donationInput : ["", [Validators.required, Validators.min(0), Validators.max(999999), CustomValidator.numeric]],
		})
   }

  ngOnInit() {
  }

  save(){
	  if (this.form.valid)
	  {
		let daily : DailyFinancial = {id: 0,
			 ticketSales: parseInt(this.form.get("ticketInput").value),
			 eventSales: parseInt(this.form.get("eventInput").value),
			 concessionSales: parseInt(this.form.get("concessionsInput").value),
			 researchFunding: parseInt(this.form.get("researchInput").value),
			 donationFunding: parseInt(this.form.get("donationInput").value) }
		this.dialogRef.close({event:"add",data:daily});
	  }
  }
}

export class CustomValidator{
	// Number only validation
	static numeric(control: AbstractControl) {
	  let val = control.value;
  
	  if (val === null || val === '') return null;
  
	  if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };
  
	  return null;
	}
  }
