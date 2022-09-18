import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


interface Radius {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss']
})
export class AddCampaignComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = ['Warszawa', 'Kraków', 'Gdańsk', 'Gdynia', 'Łódź', 'Wrocław', 'Szczecin'];
  filteredOptions: Observable<string[]> | undefined;

  campaignForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder, 
    private afs : AngularFirestore, 
    private dialogRef : MatDialogRef<AddCampaignComponent>) { }

    

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.campaignForm = this.formBuilder.group({
      campaignName : ['', Validators.required],
      campaignKeywords : ['', Validators.required],
      campaignBidAmount : ['', Validators.min(1)],
      campaignFund : ['', Validators.required],
      campaignStatus : ['', Validators.required],
      campaignTown : ['', Validators.required],
      campaignRadius : ['', Validators.required],
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  radiuses: Radius[] = [
    {value: '0-10 km', viewValue: '0 - 10 km'},
    {value: '11-20 km', viewValue: '11 - 20 km'},
    {value: '21-30 km', viewValue: '21 - 30 km'},
    {value: '31-40 km', viewValue: '31 - 40 km'},
    {value: '41-50 km', viewValue: '41 - 50 km'},
  ];

  addCampaign(){
    if(this.campaignForm.valid){
      this.afs.collection('Campaigns').add(this.campaignForm.value);
      this.campaignForm.reset();
      this.dialogRef.close();
    }
  }
}
