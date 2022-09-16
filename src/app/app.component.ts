import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUDtask';

  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(AddCampaignComponent, {
      width: '35%'
    });
  }

  
}
