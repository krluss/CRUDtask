import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'AddCampaign', component: AddCampaignComponent},
  { path: 'EditCampaign/:campaignId', component: EditCampaignComponent},
  { path: 'ViewCampaign/:campaignId', component: ViewCampaignComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
