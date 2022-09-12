import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  radiuses: Radius[] = [
    {value: '0', viewValue: '0 - 10 km'},
    {value: '1', viewValue: '11 - 20 km'},
    {value: '2', viewValue: '21 - 30 km'},
    {value: '2', viewValue: '31 - 40 km'},
    {value: '2', viewValue: '41 - 50 km'},
  ];

}
