import { Component, OnInit , Inject, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormBuilder, FormGroup,AbstractControl } from '@angular/forms';
import { DailyFinancial, FishEntry } from "../../../interfaces"

@Component({
  selector: 'fish-dialog',
  templateUrl: './fish-dialog.component.html',
  styleUrls: ['./fish-dialog.component.css']
})
export class FishDialogComponent implements OnInit {

	form : FormGroup
	locations : string[] = [
	"Salt Water",
	"Fresh Water",
	"Aquatic Mammal",
	"Deep Sea",
	"Petting Zoo",
	"Artic Land Animals",
	"Amphibians",
	"Special Event Animals"
	]

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  	public dialogRef: MatDialogRef<FishDialogComponent>,
  	private fb: FormBuilder) 
  {
	this.form = fb.group(
		{nameInput : ["", [Validators.required]],
		 quantityInput : ["", [Validators.required, Validators.min(0), Validators.max(999999), CustomValidator.numeric]],
		 locationInput : ["", [Validators.required]],
		})
   }

  ngOnInit() {
  }

  save(){
	  if (this.form.valid)
	  {
		let fish : FishEntry = {
			 fishName: this.form.get("nameInput").value,
			 quantity: parseInt(this.form.get("quantityInput").value),
			 location: this.form.get("locationInput").value,}
		this.dialogRef.close({event:"add",data:fish});
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
