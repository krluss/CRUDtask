import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog'


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


  campaignForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private afs : AngularFirestore, private dialogRef : MatDialogRef<AddCampaignComponent>) { }

  ngOnInit(): void {
    this.campaignForm = this.formBuilder.group({
      campaignName : ['', Validators.required],
      campaignKeywords : ['', Validators.required],
      campaignBidAmount : ['', Validators.required],
      campaignFund : ['', Validators.required],
      campaignStatus : ['', Validators.required],
      campaignTown : ['', Validators.required],
      campaignRadius : ['', Validators.required],
    })
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
