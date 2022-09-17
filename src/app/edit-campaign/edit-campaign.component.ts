import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface Radius {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss']
})
export class EditCampaignComponent implements OnInit {

  campaignRef: any
  editForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private afs : AngularFirestore, 
    private dialogRef : MatDialogRef<EditCampaignComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    const querySnapshot = this.afs.collection('Campaigns').doc(this.data.id).valueChanges();

    querySnapshot.subscribe(res => {
      this.campaignRef = res
      this.editForm = this.formBuilder.group({
        campaignName : [this.campaignRef.campaignName , Validators.required],
        campaignKeywords : [this.campaignRef.campaignKeywords, Validators.required],
        campaignBidAmount : [this.campaignRef.campaignBidAmount, Validators.required],
        campaignFund : [this.campaignRef.campaignFund, Validators.required],
        campaignStatus : [this.campaignRef.campaignStatus, Validators.required],
        campaignTown : [this.campaignRef.campaignTown, Validators.required],
        campaignRadius : [this.campaignRef.campaignRadius, Validators.required],
      })
    })
  }

  

  radiuses: Radius[] = [
    {value: '0-10 km', viewValue: '0 - 10 km'},
    {value: '11-20 km', viewValue: '11 - 20 km'},
    {value: '21-30 km', viewValue: '21 - 30 km'},
    {value: '31-40 km', viewValue: '31 - 40 km'},
    {value: '41-50 km', viewValue: '41 - 50 km'},
  ];



  updateCampaign(){
    console.log('siema')
  }

  

}
