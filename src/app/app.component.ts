import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  campaignList : any = []
  campaign: any = {}

  constructor(private dialog: MatDialog, private afs : AngularFirestore) {}
  openAddCampaignDialog() {
    this.dialog.open(AddCampaignComponent, {
      width: '35%'
    });
  }

  openEditCampaignDialog(id: any){
    this.dialog.open(EditCampaignComponent, {
      width: '35%',
      data:{
        id: id
      }
    })
  }

  ngOnInit(): void {
    this.getAllCampaign()
  }

  getAllCampaign(){
    const querySnapshot = this.afs.collection('Campaigns').snapshotChanges();

    querySnapshot.subscribe(res => {
      this.campaignList = res.map((e: any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    })
  }

  

  deleteCampaign(id: any){
    if(window.confirm('Are you sure you want to delete this campaign?'))
    this.afs.collection('Campaigns').doc(id).delete() 
  }

  editCampaign(id: any){
    const querySnapshot2 = this.afs.collection('Campaigns').doc(id).snapshotChanges();
    querySnapshot2.subscribe(res => {
      const data = res.payload.data();
      this.openEditCampaignDialog(data);
    })
  }


}
